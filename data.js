var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-entry",
      "name": "Main Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -3.1186071056702325,
        "pitch": 0.2566457821699153,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": -3.1186071056702325,
          "pitch": 0.2566457821699153,
          "rotation": 0,
          "target": "1-main-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-main-hallway",
      "name": "Main Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -2.0469245742516016,
        "pitch": 0.2292000629076938,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": 0.050199342732977215,
          "pitch": 0.08471381781006215,
          "rotation": 0,
          "target": "0-main-entry"
        },
        {
          "yaw": -1.1260649271370262,
          "pitch": 0.2044745405838846,
          "rotation": 0,
          "target": "2-bedroom-1"
        },
        {
          "yaw": -1.5164242389806706,
          "pitch": 0.5505181734390252,
          "rotation": 0,
          "target": "3-bathroom"
        },
        {
          "yaw": -2.3279534190394156,
          "pitch": 0.18390406667071701,
          "rotation": 0,
          "target": "4-bedroom-2-entry"
        },
        {
          "yaw": 3.1345115684558333,
          "pitch": 0.4402247662135874,
          "rotation": 0,
          "target": "6-kitchen-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -2.4105153302502096,
        "pitch": 0.4694007457291214,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": 1.010501618683703,
          "pitch": 0.3366209682347847,
          "rotation": 0,
          "target": "1-main-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 1.595229298149154,
        "pitch": 0.19311644621317114,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": -0.06560626392156976,
          "pitch": 0.5387598504846931,
          "rotation": 0,
          "target": "1-main-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-2-entry",
      "name": "Bedroom 2 entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39376181940719235,
          "pitch": 0.5646835203839622,
          "rotation": 0,
          "target": "5-bedroom-2"
        },
        {
          "yaw": 2.933613333395696,
          "pitch": 0.7611391558886247,
          "rotation": 0,
          "target": "1-main-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.021916343120604864,
        "pitch": 0.23381500495030139,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1437476780686104,
          "pitch": 0.3951009627451203,
          "rotation": 0,
          "target": "1-main-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen-hall",
      "name": "Kitchen Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.9218279459311098,
        "pitch": 0.4020092603331271,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": 0.11542668455312999,
          "pitch": 0.30148154866538235,
          "rotation": 0,
          "target": "8-bedroom-3"
        },
        {
          "yaw": 0.8475366524762435,
          "pitch": 0.23332793572127208,
          "rotation": 0,
          "target": "7-laundry-room"
        },
        {
          "yaw": 1.6731693082438461,
          "pitch": 0.6325676554965654,
          "rotation": 0,
          "target": "9-kitchen"
        },
        {
          "yaw": -1.672784720208286,
          "pitch": 0.5129988402147365,
          "rotation": 0,
          "target": "1-main-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-laundry-room",
      "name": "Laundry Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.05243117102014949,
        "pitch": 0.7070050670642729,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": -2.005518526937472,
          "pitch": 0.6651984885895779,
          "rotation": 0,
          "target": "6-kitchen-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 2.6840775057225823,
        "pitch": 0.3151605484034192,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": -1.5497071078982358,
          "pitch": 0.4034398119698075,
          "rotation": 0,
          "target": "6-kitchen-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 3.0384700120924206,
        "pitch": 0.5588582593390541,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": 3.0384700120924206,
          "pitch": 0.5588582593390541,
          "rotation": 0,
          "target": "10-kitchen-2"
        },
        {
          "yaw": 2.160158122027516,
          "pitch": 0.05304093264983223,
          "rotation": 0,
          "target": "11-dining"
        },
        {
          "yaw": 1.3111302459007028,
          "pitch": 0.35395633173936325,
          "rotation": 0,
          "target": "12-kitchen-dining-living"
        },
        {
          "yaw": -1.3003833400816873,
          "pitch": 0.5775974944433475,
          "rotation": 0,
          "target": "6-kitchen-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-kitchen-2",
      "name": "Kitchen 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -3.1224887373448382,
        "pitch": 0.5270011641792536,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": 1.5369854242151018,
          "pitch": 0.4812926207400352,
          "rotation": 0,
          "target": "9-kitchen"
        },
        {
          "yaw": -2.850051725812893,
          "pitch": 0.14953925154443404,
          "rotation": 0,
          "target": "11-dining"
        },
        {
          "yaw": 2.6511500494735554,
          "pitch": 0.27455476679461555,
          "rotation": 0,
          "target": "12-kitchen-dining-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -2.44052377998978,
        "pitch": 0.3908704138513386,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.933941725178739,
          "pitch": 0.31657438430955764,
          "rotation": 0,
          "target": "12-kitchen-dining-living"
        },
        {
          "yaw": -2.338421154863834,
          "pitch": 0.3409500895483273,
          "rotation": 0,
          "target": "13-living-room"
        },
        {
          "yaw": 2.3215072690264495,
          "pitch": 0.4003921038275209,
          "rotation": 0,
          "target": "10-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kitchen-dining-living",
      "name": "Kitchen, Dining, Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 1.4342243154904644,
        "pitch": 0.07096102407551363,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7534765230670644,
          "pitch": 0.1849302038425762,
          "rotation": 0,
          "target": "11-dining"
        },
        {
          "yaw": -2.276362693243648,
          "pitch": 0.40973728256870956,
          "rotation": 0,
          "target": "9-kitchen"
        },
        {
          "yaw": 2.654161783766879,
          "pitch": 0.46018496304180445,
          "rotation": 0,
          "target": "10-kitchen-2"
        },
        {
          "yaw": 0.07456057575096153,
          "pitch": 0.6208627239158364,
          "rotation": 0,
          "target": "13-living-room"
        },
        {
          "yaw": -0.7762179286888031,
          "pitch": 0.4118850017402096,
          "rotation": 0,
          "target": "14-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -2.820538800756445,
        "pitch": 0.45236257973688154,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": 2.556609580793486,
          "pitch": 0.41471245577041493,
          "rotation": 0,
          "target": "14-master-bedroom"
        },
        {
          "yaw": -0.4790452556958211,
          "pitch": 0.16022903365568197,
          "rotation": 0,
          "target": "11-dining"
        },
        {
          "yaw": 1.0843333321615205,
          "pitch": 0.27348410242262844,
          "rotation": 0,
          "target": "9-kitchen"
        },
        {
          "yaw": 0.17349559994622155,
          "pitch": 0.29927374975470045,
          "rotation": 0,
          "target": "10-kitchen-2"
        },
        {
          "yaw": 0.28580780615613044,
          "pitch": 0.7060721139899577,
          "rotation": 0,
          "target": "12-kitchen-dining-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 2.659250283499981,
        "pitch": 0.2955961117078001,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": -0.7344957611240961,
          "pitch": 0.48017665814130694,
          "rotation": 0,
          "target": "13-living-room"
        },
        {
          "yaw": 1.4995824830576936,
          "pitch": 0.5814414591172969,
          "rotation": 0,
          "target": "15-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-master-bathroom",
      "name": "Master Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 2.445919476795341,
        "pitch": 0.2631105633105335,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": -1.2493976101770912,
          "pitch": 0.6126716091856306,
          "rotation": 0,
          "target": "14-master-bedroom"
        },
        {
          "yaw": 0.2375224656725905,
          "pitch": 0.3121689903378684,
          "rotation": 0,
          "target": "16-master-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-master-closet",
      "name": "Master Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.1629242808012492,
        "pitch": 0.09493229086453603,
        "fov": 1.8379194564932333
      },
      "linkHotspots": [
        {
          "yaw": 0.03735193028249384,
          "pitch": 0.42362559680909584,
          "rotation": 0,
          "target": "15-master-bathroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "cali-model",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
