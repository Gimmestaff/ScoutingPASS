var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023NCWAK",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "quals": "Quals<br>",
        "double": "Double Elimination<br>",
        "finals": "Finals"
      },
      "defaultValue": "quals",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "red": "Red-1",
        "blue": "Blue-1<br>",
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "asg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Crossed Cable",
      "code": "acc",
      "type": "bool"
    },
    { "name": "Crossed Charging Station",
      "code": "acs",
      "type": "bool"
    },
    { "name": "Mobility?",
      "code": "am",
      "type": "bool"
    },
    { "name": "Docked",
      "code": "ad",
      "type":"radio",
      "choices": {
        "docked": "Docked (not Engaged)<br>",
        "engaged": "Engaged<br>",
        "attempted": "Attempted but failed<br>",
        "not attempted": "Not attempted"
      },
      "defaultValue": "I forgor"
    }
  ],
  "teleop": [
    { "name": "Grid Scoring",
      "code": "tsg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Feeder Count<br>(Fed another bot)",
      "code": "tfc",
      "type": "counter",
      "cycleTimer": "tct"
    },
    { "name": "Was Fed<br>Game Pieces",
      "code": "wf",
      "type": "bool"
    },
    { "name": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Who Defended this bot",
      "code": "who",
      "type": "text"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "Floor Pickup",
      "code": "fpu",
      "type": "radio",
      "choices": {
        "cones": "Cones<br>",
        "cubes": "Cubes<br>",
        "both": "Both<br>",
        "not attempted": "Not Attempted"
      },
      "defaultValue": "I forgor"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "parked": "Parked<br>",
        "docked": "Docked (Not Engaged)<br>",
        "engaged": "Engaged<br>",
        "attempted": "Attempted but failed<br>",
        "not attempted": "Not attempted"
      },
      "defaultValue": "I forgor"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "code": "dn",
      "type": "counter"
    },
    { "name": "Links Scored",
      "code": "ls",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "not effective": "Not Effective<br>",
        "average": "Average<br>",
        "very good": "Very Effective<br>",
        "I Forgor": "Not Observed"
      },
      "defaultValue": "I forgor"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "below average": "Below Average<br>",
        "average": "Average<br>",
        "excellent": "Excellent<br>",
        "did not defend": "Did not play defense"
      },
      "defaultValue": "I forgor"
    },
    { "name": "Swerve drive?",
      "code": "sd",
      "type": "bool"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "slow": "1 (slow)<br>",
        "kind of slow": "2<br>",
        "average": "3<br>",
        "kind of fast": "4<br>",
        "ZOOM": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Cones (>2)",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 1000
    }
  ]
}`;
