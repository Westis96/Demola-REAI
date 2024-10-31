export type HighlightEvent = {
  created: string;
  duration: number;
  id: string;
  start: number;
  ai_resolution: null;
  comment: null;
  has_camera_directions: null;
  involved_players: [];
  is_ai_generated: boolean;
  modified: string;
  should_render: boolean;
  tags: {
    name: string;
    slug: string;
    origin: string;
    custom: boolean;
  }[];
  annotations: null;
  creator: null;
  permissions: {
    [key: string]: {
      permitted: boolean;
      reason?: string[];
    };
  };
  privacy: string;
  reply_count: number;
  team_association: null;
  thumbnail: string;
  videos: [];
}

export type HighlightEventSimple = Pick<HighlightEvent, 'id' | 'start' | 'duration' | 'tags'>;


const highlight_events_raw: HighlightEvent[] = [
    {
      "created": "2024-10-23T15:26:54.099139+02:00",
      "duration": 0,
      "id": "a5856075-c93e-44c9-acbe-b92313e91172",
      "start": 6399,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.099139+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Half end",
          "slug": "half-end",
          "origin": "3",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.098964+02:00",
      "duration": 25,
      "id": "a01f723b-134c-476b-b0e2-d15b9ab6b63a",
      "start": 6372,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.098964+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.098784+02:00",
      "duration": 25,
      "id": "ba4198c7-19da-45b7-a68a-dc69d2ae6a7c",
      "start": 6274,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.098784+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.098596+02:00",
      "duration": 25,
      "id": "3398a312-e22a-4c59-9320-66fb8dee8241",
      "start": 6266,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.098596+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.098411+02:00",
      "duration": 25,
      "id": "6e7ded5c-f219-42e9-9a82-c821ab25b6ee",
      "start": 6114,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.098411+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.098157+02:00",
      "duration": 25,
      "id": "1b9760bb-e617-4033-b5fa-4b973d70e02b",
      "start": 6088,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.098157+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.097979+02:00",
      "duration": 25,
      "id": "a753df58-7f8d-4fc1-9afc-6848a72a251f",
      "start": 6041,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.097979+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.097788+02:00",
      "duration": 25,
      "id": "d0c81815-4464-4bd2-b7f6-8210a9718bc1",
      "start": 6025,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.097788+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.097563+02:00",
      "duration": 25,
      "id": "830f2ac7-c231-4a42-aa85-52f13e4c5cf9",
      "start": 5975,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.097563+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Kickoff",
          "slug": "kickoff",
          "origin": "72",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.097384+02:00",
      "duration": 25,
      "id": "fd5e4b03-e416-4340-9700-aaede63186fc",
      "start": 5949,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.097384+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal",
          "slug": "goal",
          "origin": "1",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.097196+02:00",
      "duration": 25,
      "id": "3e3798da-9da7-48f6-b85d-f67194bf2ed4",
      "start": 5948,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.097196+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.097012+02:00",
      "duration": 25,
      "id": "74afd80e-9cb6-4fb9-914f-c18aaa55f39d",
      "start": 5879,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.097012+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.096838+02:00",
      "duration": 25,
      "id": "c47e664b-9580-43c6-8d0c-2edf4eaa045f",
      "start": 5735,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.096838+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.096664+02:00",
      "duration": 25,
      "id": "0c34fad1-46db-4dce-8c95-1a2e603a0f93",
      "start": 5651,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.096664+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.096491+02:00",
      "duration": 25,
      "id": "64549b46-c382-42b6-82fd-07bc6b01867a",
      "start": 5506,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.096491+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.096303+02:00",
      "duration": 25,
      "id": "503fa033-55eb-4bd4-94cc-9fe82a203df5",
      "start": 5472,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.096303+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.096128+02:00",
      "duration": 25,
      "id": "f8f9938e-68de-47c9-b4bf-aeeb44da6d4c",
      "start": 5465,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.096128+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.095953+02:00",
      "duration": 25,
      "id": "46d761af-6f10-43cc-8189-6e01eb22d9fe",
      "start": 5448,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.095953+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Kickoff",
          "slug": "kickoff",
          "origin": "72",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.095779+02:00",
      "duration": 25,
      "id": "b00a97f8-08d7-463d-abc1-5b2653900b3d",
      "start": 5411,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.095779+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal",
          "slug": "goal",
          "origin": "1",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.095608+02:00",
      "duration": 25,
      "id": "85923e4e-f0e6-437e-a484-1845043bd207",
      "start": 5410,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.095608+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.095438+02:00",
      "duration": 25,
      "id": "be814abd-281c-425e-951e-451db4900771",
      "start": 5334,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.095438+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.095268+02:00",
      "duration": 25,
      "id": "d6d0da92-e025-4751-89e5-9fe88a602700",
      "start": 5245,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.095268+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.095097+02:00",
      "duration": 25,
      "id": "69560b0d-a57f-4a3b-aa42-748e0ceb1dc5",
      "start": 5240,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.095097+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.094923+02:00",
      "duration": 25,
      "id": "2beb1647-9443-460d-9b65-10fa6946e940",
      "start": 5210,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.094923+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.094752+02:00",
      "duration": 25,
      "id": "a943d0b4-b1bb-4f27-9990-cf62817a7392",
      "start": 5081,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.094752+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.094579+02:00",
      "duration": 25,
      "id": "ec2115b4-c503-4772-93d3-130dfae0cd94",
      "start": 5055,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.094579+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.094403+02:00",
      "duration": 25,
      "id": "ed9a7c28-b0d5-4180-b222-5093d7f1663d",
      "start": 5021,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.094403+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Kickoff",
          "slug": "kickoff",
          "origin": "72",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.094228+02:00",
      "duration": 25,
      "id": "cc63397b-4e2f-4850-8fa3-98f08e3f38b2",
      "start": 4980,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.094228+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal",
          "slug": "goal",
          "origin": "1",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.094053+02:00",
      "duration": 25,
      "id": "f3e6874a-e8a7-4f38-bfc9-8d9f2bfc2d7d",
      "start": 4979,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.094053+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.093878+02:00",
      "duration": 25,
      "id": "60c9792e-a5e6-4be6-8610-6595b8a2cb78",
      "start": 4898,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.093878+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.093675+02:00",
      "duration": 25,
      "id": "a7c30080-416b-4963-bb56-01f0c71d4a2b",
      "start": 4863,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.093675+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.093499+02:00",
      "duration": 25,
      "id": "5285fa2a-d2e2-4871-a4b9-fe7b602d7ce8",
      "start": 4738,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.093499+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.093325+02:00",
      "duration": 25,
      "id": "92d4f107-347d-4c53-9a36-9f9ce9e3f769",
      "start": 4678,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.093325+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.093151+02:00",
      "duration": 25,
      "id": "2ee4e590-086a-4adf-9871-c52fd749c1ef",
      "start": 4656,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.093151+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.092957+02:00",
      "duration": 25,
      "id": "9796ce0b-fed3-420f-b3bb-3fa35dc9532c",
      "start": 4536,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.092957+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.092719+02:00",
      "duration": 25,
      "id": "f0c9916b-fc17-4e45-9148-c1e8598fec98",
      "start": 4364,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.092719+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Kickoff",
          "slug": "kickoff",
          "origin": "72",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.092453+02:00",
      "duration": 25,
      "id": "fd0cd149-499b-49fa-b396-9785fad0b5b4",
      "start": 4326,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.092453+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal",
          "slug": "goal",
          "origin": "1",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.092181+02:00",
      "duration": 25,
      "id": "f38460f8-de99-4f9e-bf45-91cce404bd50",
      "start": 4325,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.092181+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.091939+02:00",
      "duration": 25,
      "id": "1c2a457a-66cd-434a-b1be-12ce2134f165",
      "start": 4264,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.091939+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.091649+02:00",
      "duration": 25,
      "id": "035f30eb-07e4-455b-9721-841b180e9abf",
      "start": 4225,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.091649+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.091383+02:00",
      "duration": 25,
      "id": "405ce2d0-9ad3-4011-8925-7ca3e8f7c96e",
      "start": 4180,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.091383+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.091198+02:00",
      "duration": 25,
      "id": "1bb9bff3-765e-4344-bb4c-c95a52aee0a8",
      "start": 4149,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.091198+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.091022+02:00",
      "duration": 25,
      "id": "f1446027-400e-40ae-84c7-034e510f1189",
      "start": 4088,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.091022+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.090843+02:00",
      "duration": 25,
      "id": "27f71177-171a-48d1-a8c5-13cf7f65350f",
      "start": 4041,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.090843+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.090663+02:00",
      "duration": 25,
      "id": "1758f0a7-fc9c-4ffe-a167-b9771750d1f8",
      "start": 3964,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.090663+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.090478+02:00",
      "duration": 25,
      "id": "6bd09172-f7c5-48ca-965f-150ea834084d",
      "start": 3934,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.090478+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.090286+02:00",
      "duration": 25,
      "id": "8a560132-5e69-4d43-b3e5-69afec0dc3f4",
      "start": 3934,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.090286+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.090022+02:00",
      "duration": 25,
      "id": "750a6b6e-5623-43fe-89b2-4d4feeedb17c",
      "start": 3922,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.090022+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.089700+02:00",
      "duration": 25,
      "id": "bf967ba5-0d3a-4e66-8f21-f2ee1288504d",
      "start": 3917,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.089700+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.089364+02:00",
      "duration": 25,
      "id": "b089e934-55f8-4240-8581-228759065d98",
      "start": 3720,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.089364+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.089037+02:00",
      "duration": 25,
      "id": "3cea6297-4b4f-46b7-ba7e-270387c494a7",
      "start": 3694,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.089037+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.088719+02:00",
      "duration": 25,
      "id": "dccf5ca7-7913-4ec3-ada5-ba45e98fd1a1",
      "start": 3661,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.088719+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.088294+02:00",
      "duration": 25,
      "id": "cdb7c402-08dc-4dac-9f7c-4d7b55044f1a",
      "start": 3605,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.088294+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.087995+02:00",
      "duration": 0,
      "id": "ac2669c4-d876-48a9-9788-7b1b2b281fcc",
      "start": 3584,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.087995+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Half start",
          "slug": "half-start",
          "origin": "2",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.087691+02:00",
      "duration": 0,
      "id": "c6ab23b2-5269-46fe-b9c2-0b7c27e4efe3",
      "start": 3167,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.087691+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Half end",
          "slug": "half-end",
          "origin": "3",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.087360+02:00",
      "duration": 25,
      "id": "a6984992-ce02-41f6-8e55-20cb4a16d05f",
      "start": 3144,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.087360+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.087029+02:00",
      "duration": 25,
      "id": "04fecbf5-3b92-4fc1-a4e5-e083638ca8e0",
      "start": 3100,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.087029+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.086688+02:00",
      "duration": 25,
      "id": "65001294-e4e8-4f01-8c4d-4d6a1631729b",
      "start": 3093,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.086688+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.085329+02:00",
      "duration": 25,
      "id": "2589ab57-93e9-4bd0-8d1c-075de75be6b2",
      "start": 2990,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.085329+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.085050+02:00",
      "duration": 25,
      "id": "114745ea-f9fc-4c53-a1f1-32891af94cb2",
      "start": 2823,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.085050+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.084812+02:00",
      "duration": 25,
      "id": "6b1b12ea-2c1d-42d1-9a17-e5a15d6052ee",
      "start": 2742,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.084812+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.084574+02:00",
      "duration": 25,
      "id": "2824edbf-a457-4579-aed5-47b5dd66dad8",
      "start": 2726,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.084574+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.084290+02:00",
      "duration": 25,
      "id": "5065ae0b-d73a-4cb9-a665-fe8a42495aef",
      "start": 2656,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.084290+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.083970+02:00",
      "duration": 25,
      "id": "9213dacd-b690-4302-a83c-6973318137b4",
      "start": 2638,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.083970+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.083656+02:00",
      "duration": 25,
      "id": "a6026263-510b-427c-b20b-b178b6114a0b",
      "start": 2609,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.083656+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.083330+02:00",
      "duration": 25,
      "id": "1edd250f-b533-45f0-a71e-81041f2181b3",
      "start": 2531,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.083330+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.083013+02:00",
      "duration": 25,
      "id": "7316aca1-34fe-42fb-b9d0-5f362300862f",
      "start": 2521,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.083013+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.082783+02:00",
      "duration": 25,
      "id": "29f9e037-6f47-4ee0-b302-c6abd14cd6b2",
      "start": 2510,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.082783+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.082552+02:00",
      "duration": 25,
      "id": "13179ed9-a94f-467f-8346-44c7c4cf0c63",
      "start": 2486,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.082552+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.082244+02:00",
      "duration": 25,
      "id": "1f485b06-a925-47f4-a41a-056bcb91769b",
      "start": 2484,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.082244+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.081930+02:00",
      "duration": 25,
      "id": "1a1dbf46-d8a2-4ba3-94e2-5a736e42fc05",
      "start": 2414,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.081930+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.081603+02:00",
      "duration": 25,
      "id": "23fd2f4b-1708-4490-a9e5-6c16925eea11",
      "start": 2367,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.081603+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.081312+02:00",
      "duration": 25,
      "id": "7fda6619-76f2-44cf-a321-f0e5db70f60a",
      "start": 2319,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.081312+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.081007+02:00",
      "duration": 25,
      "id": "24d153ee-d2fa-4e3f-bfe8-2827c9eb7e66",
      "start": 2279,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.081007+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.080714+02:00",
      "duration": 25,
      "id": "c59eb3aa-11d6-4d20-94f7-8141026b4827",
      "start": 2254,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.080714+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.080417+02:00",
      "duration": 25,
      "id": "0b899e94-6e3c-4396-9c6e-85ccb2f9db6d",
      "start": 2168,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.080417+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.080118+02:00",
      "duration": 25,
      "id": "fcb49333-0dc8-4d95-a968-17f65acc1fb5",
      "start": 2122,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.080118+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.079822+02:00",
      "duration": 25,
      "id": "484d2703-a1a8-4d8f-98e5-03f40f56e846",
      "start": 2087,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.079822+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.079517+02:00",
      "duration": 25,
      "id": "21dbb539-2201-4e8e-ac62-5ebb28e4fce4",
      "start": 2015,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.079517+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.079219+02:00",
      "duration": 25,
      "id": "7caa2627-8fa9-428b-bd5b-3dd02c95e3ee",
      "start": 1993,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.079219+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.078923+02:00",
      "duration": 25,
      "id": "fa4da462-e58a-4a6a-8d9b-271af367ab22",
      "start": 1941,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.078923+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.078626+02:00",
      "duration": 25,
      "id": "328612d4-3223-46c1-8be3-8fce59ff254f",
      "start": 1851,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.078626+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.078333+02:00",
      "duration": 25,
      "id": "26d4f748-e1e0-4071-865b-9cbbb6e86204",
      "start": 1723,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.078333+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.078039+02:00",
      "duration": 25,
      "id": "33d49ce5-2e9e-46f9-86f4-14ccdb939e70",
      "start": 1430,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.078039+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.077730+02:00",
      "duration": 25,
      "id": "fb28ae29-519d-41a6-8b7a-be13ae8ac98f",
      "start": 1413,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.077730+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.077406+02:00",
      "duration": 25,
      "id": "65ef63e0-0170-4b65-9dd7-3cc4f75c97e4",
      "start": 1411,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.077406+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.077117+02:00",
      "duration": 25,
      "id": "2402260d-c83b-4a97-bcbf-25f228b95d55",
      "start": 1278,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.077117+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.076805+02:00",
      "duration": 25,
      "id": "a400f07d-2b6f-4b37-896c-ab9fb6c55f65",
      "start": 1246,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.076805+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.076498+02:00",
      "duration": 25,
      "id": "17754f03-fa89-45db-abe0-8b674fca8401",
      "start": 1149,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.076498+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.076256+02:00",
      "duration": 25,
      "id": "3d129e80-34e5-4b34-99d3-d163eed73907",
      "start": 1033,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.076256+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.075974+02:00",
      "duration": 25,
      "id": "6a83c28c-ea0c-4407-b1d2-5dda225d6aa3",
      "start": 955,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.075974+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.075701+02:00",
      "duration": 25,
      "id": "23f063a6-aa3a-4c8e-a249-481f212fd38f",
      "start": 929,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.075701+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.075411+02:00",
      "duration": 25,
      "id": "7c0bd732-ae8c-47a7-afdf-80b4191baeff",
      "start": 914,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.075411+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.075113+02:00",
      "duration": 25,
      "id": "72cf8323-0fb7-48e0-89a1-866cfcf98497",
      "start": 815,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.075113+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.074885+02:00",
      "duration": 25,
      "id": "136ca949-9301-458e-a08a-48d08c96994f",
      "start": 701,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.074885+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Goal kick",
          "slug": "goal-kick",
          "origin": "71",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.074684+02:00",
      "duration": 25,
      "id": "125af5ec-384f-4eb7-ac56-df63798ca38b",
      "start": 676,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.074684+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.074500+02:00",
      "duration": 25,
      "id": "90ddf3dd-eea8-4f85-ae49-2a03d308309c",
      "start": 610,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.074500+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.074313+02:00",
      "duration": 25,
      "id": "3a83d594-df17-420a-9c10-db632a577d2f",
      "start": 553,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.074313+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.074109+02:00",
      "duration": 25,
      "id": "cd873f5d-dc6f-4a37-8708-ef2c9846e8d1",
      "start": 525,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.074109+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.073794+02:00",
      "duration": 25,
      "id": "d67301a0-aec3-47f3-a848-70e12f7111b9",
      "start": 499,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.073794+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.073515+02:00",
      "duration": 25,
      "id": "07b0b750-5a13-4a4c-9573-f43fc464628f",
      "start": 468,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.073515+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.073328+02:00",
      "duration": 25,
      "id": "fd366e0d-b03f-4af8-bb48-a4a407b09680",
      "start": 445,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.073328+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Shot on goal",
          "slug": "shot-on-goal",
          "origin": "9",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.073143+02:00",
      "duration": 25,
      "id": "65f6e4aa-08be-47cc-a8c4-8960b721de4b",
      "start": 445,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.073143+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Freekick",
          "slug": "freekick",
          "origin": "7",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.072939+02:00",
      "duration": 25,
      "id": "3f0d6fac-65e7-4387-83c0-5c115d6c90c1",
      "start": 373,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.072939+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.072728+02:00",
      "duration": 25,
      "id": "e8f51015-0cb0-47e4-aebb-5fc5abf617b0",
      "start": 344,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.072728+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Corner",
          "slug": "corner",
          "origin": "4",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    },
    {
      "created": "2024-10-23T15:26:54.072447+02:00",
      "duration": 0,
      "id": "219eb3ba-cd66-4487-83c5-4a7c367e7161",
      "start": 265,
      "ai_resolution": null,
      "comment": null,
      "has_camera_directions": null,
      "involved_players": [],
      "is_ai_generated": true,
      "modified": "2024-10-23T15:26:54.072447+02:00",
      "should_render": false,
      "tags": [
        {
          "name": "Half start",
          "slug": "half-start",
          "origin": "2",
          "custom": false
        }
      ],
      "annotations": null,
      "creator": null,
      "permissions": {
        "matches.create_highlight__matchhighlightreply": {
          "permitted": true
        },
        "matches.create_highlight__showcasehighlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.update_highlight": {
          "permitted": false,
          "reason": [
            "permission"
          ]
        },
        "matches.destroy_highlight": {
          "permitted": true
        },
        "matches.download_highlight": {
          "permitted": true
        }
      },
      "privacy": "public",
      "reply_count": 0,
      "team_association": null,
      "thumbnail": "https://d1rdsqbsamtdia.cloudfront.net/static/images/fallback-thumb-plain.2019a45d8853.svg",
      "videos": []
    }
]


export const highlight_events: HighlightEventSimple[] = highlight_events_raw.map((event) => ({
    id: event.id,
    start: event.start,
    duration: event.duration,
    tags: event.tags,
}));