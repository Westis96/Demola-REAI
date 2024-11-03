'use client'

// Copyright (c) BevelAI Oy. All rights reserved.
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Upload } from 'lucide-react'

type uploadProps = {
  type?: string,
  onUpload?: (id:string|null) => void,
}

const uploadFiles = async (files: File[]) => {
  console.log(files)
  return null
}

export default function UploadFile({ type, onUpload }: uploadProps) {
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  // const { uploadFiles, isUploading } = useUploadFile()
  const [isUploading] = useState(false)

  const image = ".jpg, .jpeg, .png, .gif, .bmp, .tiff"
  const text = ".txt, .pdf,"
  const video = ".mp4, .mov, .avi, .flv, .wmv, .mkv"
  const audio = ".mp3, .wav, .aac, .flac, .ogg, .m4a"
  const shape = ".svg"

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      console.error('You must select a file to upload.')
      return
    }

    const files = Array.from(event.target.files)
    const uploadedId = await uploadFiles(files)
    if (onUpload) onUpload(uploadedId)
  }

  let acceptFileTypes = ""
  switch (type) {
    case "image":
      acceptFileTypes = image;
      break;
    case "text":
      acceptFileTypes = text;
      break;
    case "video":
      acceptFileTypes = video;
      break;
    case "audio":
      acceptFileTypes = audio;
      break;
    case "shape":
      acceptFileTypes = shape;
  }

  return (
    <div>
      <div className='flex flex-row w-full'>
        <Button onClick={() => hiddenFileInput.current?.click()} className="my-0 w-full" variant="default" size="default">
          {!isUploading ? 
            <><Upload className="mr-2 h-4 w-4" color='hsl(var(--foreground))' opacity={.9} /><span>{"Upload " + (type ? type : "file")}</span></>
            :
            <span>Uploading ...</span>
          }
        </Button>
        <Input
          id="asset"
          type="file"
          ref={hiddenFileInput}
          onChange={handleFileUpload}
          disabled={isUploading}
          className='hidden'
          accept={acceptFileTypes}
        />
      </div>
    </div>
  )
}