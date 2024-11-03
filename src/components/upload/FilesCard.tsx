"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ImageIcon } from "@radix-ui/react-icons"
import { Label } from "../ui/label"
import LucideIcon from "../ui/lucide-icon"
import { Button } from "../ui/button"
import supabase from '@/lib/supabase-client';
import { saveAs } from 'file-saver';
import { cn } from "@/lib/utils"
import { assetFileFetcher } from "@/lib/fetchers"
import { useAtomValue } from "jotai"
import { UserAtom, WorkspaceAtom } from "@/state/Atoms"
import useSWR from "swr"
import { useEffect, useState } from "react"
import { Asset, UploadedFile } from "@/lib/types/types";

interface FilesCardProps {
  uploadedFiles: UploadedFile[];
  selectedFile: UploadedFile | null;
  isLoading: boolean;
  setSelectedFile: (file: UploadedFile) => void;
}

export function FilesCard({ uploadedFiles, selectedFile, setSelectedFile, isLoading }: FilesCardProps) {
  const workspace = useAtomValue(WorkspaceAtom)
  const user = useAtomValue(UserAtom)
  const { data: videoFileData, error: videoError, isLoading: videoLoading, mutate: videoMutate } = useSWR(
    ["video", workspace, user], 
    () => assetFileFetcher("video", workspace?.id, user?.id)
  );
  const [uploadedAssets, setUploadedAssets] = useState<UploadedFile[]>([])

  const onDownloadFile = (file: UploadedFile) => async () => {
    const path = file.file_path
    const name = path?.split('/').pop()
    console.log("download file: ", file)
    if (path === null || name === null) {
      console.error("File path or name invalid")
      return
    }
    const { data, error } = await supabase.storage.from('assets').download(path)
    if (data !== null) {
        saveAs(data, name);
    }
  }

  useEffect(() => {
    if (videoFileData) {
      const newVideoAssets: UploadedFile[] = videoFileData.data? videoFileData.data.map((asset: Asset) => {
        const videoAsset: UploadedFile = {
          asset_id: asset.id,
          type: "video",
          name: asset.name??asset.id,
          file_path: asset.url,
          show_download: true
        }
        return videoAsset
      }) : []
      setUploadedAssets(newVideoAssets)
    }
  }, [videoFileData])

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      if (uploadedFiles.some((file) => file.type === "text")) {
        const PDFAsset = uploadedFiles.filter((file) => file.type === "text")
        setUploadedAssets(PDFAsset)
      } else {
        videoMutate()
      }
    }
  }, [uploadedFiles])

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Files</CardTitle>
        <CardDescription>View the uploaded files here</CardDescription>
      </CardHeader>
      <CardContent className="max-h-48 overflow-y-scroll">
        {uploadedAssets.length > 0 ? (
          <div className="flex flex-col gap-2">
            {uploadedAssets.map((file, index) => (
              <div
                key={index}
                className={cn("w-full flex flex-row border border-border bg-foreground/10 rounded-xl items-center", selectedFile?.asset_id === file.asset_id ? "border-primary bg-primary/10" : "")}
                onClick={() => {
                  if (isLoading || file.type === "text") return;
                  setSelectedFile(file);
                }}
              >
                <div className="flex flex-row gap-2 p-4">
                  {file.type === "image" ? (
                    <LucideIcon name="file-image" className="mr-2 h-4 w-4" />
                  ) : file.type === "video" ? (
                    <LucideIcon name="file-video-2" className="mr-2 h-4 w-4" />
                  ) : file.type === "text" ? (
                    <LucideIcon name="file-text" className="mr-2 h-4 w-4" />
                  ) : file.type === "audio" ? (
                    <LucideIcon name="file-audio-2" className="mr-2 h-4 w-4" />
                  ) : file.type === "shape" ? (
                    <LucideIcon name="file-box" className="mr-2 h-4 w-4" />
                  ) : (
                    <LucideIcon name="file" className="mr-2 h-4 w-4" />
                  )}
                  <Label className="font-bold">{file.name}</Label>
                </div>
                <div className="grow" />
                {file.type === "text" && (
                  <Button 
                    className="mr-1" 
                    variant={"subtle"} 
                    size={"icon"}
                    onClick={onDownloadFile(file)}
                  >
                    <LucideIcon name="download" className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <Card className="flex w-full flex-col items-center justify-center space-y-2 bg-transparent p-4 px-16">
            <div className="mr-4 shrink-0 rounded-full border border-dashed p-4">
              <ImageIcon className="size-4 text-muted-foreground" aria-hidden="true" />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <CardTitle>No files uploaded</CardTitle>
              <CardDescription>Upload a file to see it here</CardDescription>
            </div>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}