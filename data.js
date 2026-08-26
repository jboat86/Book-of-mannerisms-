const ICONS = [{
    
    color: "green",
    signal: "🟢",
    label: "safe to use", 

    color: "amber",
    signal: "🟡",
    label: "could use but exercise caution, depends on situation", 

    color: "red",
    signal: "🔴",
    label: " may offend if used, avoid!", 
}]





const COUNTRIES = [{
    
    code: "gh", 
    name: "Ghana",
    flag: "🇬🇭",
    mannerisms: [{
        id: "gh-1",
        type:"sound",
        icon: "🟢",
        title: "Eii",
        // image: "",
        // audio: "",
        meaning: "shock, surprise, disbelief, OMG!, What!?",
        context: "Casual conversrations with friends, family or peers",
        usage_tip: "Totally fine to use. Shows you are engaged. Tone matters- higher pitch = shock",
        equivalent: "🇳🇬 Ah-Ah/Ehn (exaggerated)",
        
        id: "gh-2",
        type:"sound",
        icon: "🟢",
        title: "Hmmm",
         // image: "",
         // audio: "",
        meaning: "worry",
        context: "Friend delivers bad news",
        usage_tip: "use when you someone vents to you about their problem/s",
        equivalent: "🇳🇬 Chai",


        id: "gh-3",
        type:"sound",
        icon: "🟢",
        title: "'Eh-hen'",
         // image: "",
         // audio: "",
        meaning: "'I'm listening'",
        context: "Listening during a convversation",
        usage_tip: "use during a conversation to sound like a local but optional",
        equivalent: "🇳🇬 Chai",

        id: "gh-4",
        type:"sound",
        icon: "🟡",
        title: "'Ahaa' (medium to high pitch)",
         // image: "",
         // audio: "",
        meaning: "'I understand you now!'",
        context: " when one finally understand what someone is telling them during a convversation",
        usage_tip: "use during a conversation to sound like a local but optional, use with medium tone and not high (could be seen as rude)",
        equivalent: "🇳🇬 Chai",
     

        id: "gh-5",
        type:"sound",
        icon: "🔴",
        title: "tsk-tsk",
         // audio: "",
        meaning: "disagreement, refusal, end of discussion",
        context: "Friend says something you're not happy with",
        equivalent: "🇳🇬 ehn-ehn (repeated rapidly)",
       

         }],


   code: "ng", 
    name: "Nigeria",
    flag: "🇳🇬",
    mannerisms: [{
        id: "ng-1",
        type:"sound",
        icon: "🟢",
        title: "Ah-Ah",
         // image: "",
        meaning: "shock, surprise, disbelief",
        context: "Friend tells crazy story",
         //   usage_tip: "",
        equivalent: "🇧🇴 Eii",
        
        id: "ng-2",
        type:"sound",
        icon: "🟡",
        title: "ehn!",
         // image: "",
        meaning: "shock, surprise",
        context: "Friend says they are getting engaged",
         //   usage_tip: "",
        equivalent: "🇧🇴 Eii",

        id: "ng-3",
        type:"sound",
        icon: "🔴",
        title: "ehn-ehn",
         // image: "",
        meaning: "disagreement, refusal, end of discussion",
        context: "Friend says something you're not happy with",
        equivalent: "🇧🇴 tsk-tsk",

        id: "ng-4",
        type:"sound",
        icon: "🔴",
        title: "chai!",
         // image: "",
        meaning: "worry",
        context: "heared some bad news",
        equivalent: "🇧🇴 Hmmm",
        
    
}],

   code: "jp", 
    name: "Japan",
    flag: "🇯🇵",
    mannerisms: [{
        id: "jp-1",
        type:"sound",
        icon: "🟢",
        title: "Hai",
         // image: "",
        //  audio: "",
        meaning: "Yes, I'm listening",
        description: "In Japan: Say 'hai' to show you are listening and understand what someone is saying. It is considered rude to not acknowledge what someone is saying.",   
        context: "listening, show that you understand what someone is saying",
         //   usage_tip: "",
        equivalent: "🇧🇴 'Eh-hen!'/🇺🇸 'Mhm' ",
        
        id: "jp-2",
        type:"sound",
        icon: "🟡",
        title: "E?",
         // image: "",
        //  audio: "",
        meaning: " Huh?, Really?",
        context: "sReacting to umexpected info. Polite 'pardon?' or 'really?'",
        usage_tip: "Rise in pitch. Short 'E' is casual. 'Eee?'drawn out = more surprise",
        equivalent: "🇺🇸 'Huh?'/ 🇳🇬 ehnn/Mmm? (low to high pitch)'",

        id: "jp-3",
        type:"sound",
        icon: "🔴",
        title: "Nuh-uh",
         // image: "",
        //  audio: "",
        meaning: "direct no",
        context: "disagreeing with someone",
        usage_tip: "chotto (That is a bit...) instead",
        equivalent: "🇺🇸 'Nah'/🇧🇴  'tsk-tsk'",
      
         }],


    code: "jm", 
    name: "Jamaica",
    flag: "🇯🇲",
    mannerisms: [{
        id: "jm-1",
        type:"hand gesture",
        icon: "🟢",
        title: "Hand on chest",
         // image: "",
        meaning: "'one love', 'Hello' ",
        description: "warm greeting",   
        context: "meeting someone for the first time",
        usage_tip: "smiling during gesture shows more warmth/saying 'one love' during gesture show to sound like a local but is optional",
      

        id: "jm-2",
        type: "sound + head movement (lower chin)",
        icon: "🟢", 
        title: "Wah gwan",
         // audio: "",
        meaning: "Hello, What's up",
        context: "warm greeting among friends",
        usage_tip: "when you get know a local",
       
        
        id: "jm-3",
        type:"sound",
        icon: "🟡",
        title: "E?",
         // image: "",
        //  audio: "",
        meaning: " Huh?, Really?",
        context: "When questioning something",
        usage_tip: "surprised but use soft pitched voice to show you are not being rude, Do not use a high pitched voice, it is considered rude",
        equivalent: "🇺🇸 'Mhm'/🇧🇴 'Aah (medium pitch)'",

        id: "jm-4",
        type: "sound",
        icon: "🟡/🔴",
        title: "'Mchew'/Teeth sucking sound",
         // image: "",
        meaning: "annoyance, disagreement and expressing tiredness/exhaustion",
        context: "Non-verbal expression. Intensity changes meaning from serious to playful",
        usage_tip: "",

        id: "jm-5",
        type:"lip gesture",
        icon: "🟡",
        title: "pointing with lips",
         // image: "",
        context: "directing attention without using hands usually at someone",
        meaning: "subtle way to indicate direction, object, or person", 
        usage_tip: "Use with neutral fac. Point with lips only. If you frown, it flips from 'that one' to 'I dont like them'.",   
      

        id: "jm-6",
        type:"sound",
        icon: "🔴",
        title: "Nuh-sah",
         // image: "",
        //  audio: "",
        meaning: " Direct no",
        context: "disagreeing with someone",
         //   usage_tip: "",
        equivalent: "🇺🇸 'nah'/🇧🇴  abrupt'Aah (high pitch)'",

        id: "jm-7",
        type:"sound",
        icon: "🔴",
        title: "'Chah!' (said abruptly)",
         // image: "",
        // audio: "" ,
        meaning: "Damn!",
        context: "used when annoyed",
        equivalent: "🇺🇸 'Damn!/Pfft!'/🇧🇴 abrupt 'Aah' (high pitch)",

    }],

        code:'pt',
        label: "Portugal",
        flags:'🇵🇹',
        mannerisms: [{
            id: "pt-1",
            type: "sound",
            icon: "🔴",
            title: "OK Sign 👌",
            meaning: "Can mean 'zero' or 'worthless'",
            context: "Non-verbal. Can be offensive",
            usage_tip: "Avoid. Use thumbs up instead",
            equivalent: "🇬🇧 You're nothing'",
     
            id: "pt-2",
            type: "gesture",
            icon: "🟢",
            title: "Cheek Kisses",
            meaning: "Greeting - 2 kisses, right cheek first",
            context: "Friends, family, casual meetings",
            usage_tip: "Lean in. Don't actually kiss, Start right",
            equivalent: "🇬🇧 'Alright mate?'",

        }],



        code:'tr',
        label: "Turkey",
        flags:'🇹🇷',
        mannerisms: [{
            id: "tr-1",
            type: "gesture",
            icon: "🔴",
            title: "Thumbs up 👍",
             // image: "",
            meaning: "Can be vulgar, like middle finger",
            context: "Casual, especially with men",
            usage_tip: "May offend if used, avoid!",
            equivalent: "🇬🇧 'F*** You''",

            id: "tr-2",
            type: "sound",
            icon: "🟢",
            title: "Head tilt back + 'H1",
         // audio: "",
            meaning: "No",
            context: "Non-verbal refusal",
            usage_tip: "Safe to use. Often paired with 'tut' sound",
            equivalent: "🇬🇧 'nope''",

            id: "tr-3",
            type: "sound",
            icon: "🟡",
            title: "Tsk/Tut sound",
         // audio: "",
            meaning: "No, disapproval",
            context: "With head tilt back",
            usage_tip: "Use with caution. Can seem rude if overused",
            equivalent: "🇬🇧 Nah'",

       }],

        code:'gr',
        label: "Greece",
        flags:'🇬🇷',
        mannerisms: [{
            id: "gr-1",
            type: "gesture",
            icon: "🟢",
            title: "Nod up",
            meaning: "yes, approval",
            context: "Friendly agreement",
            usage_tip: "safe to use. Slight upward nod",

            id: "gr-2",
            type: "sound",
            icon: "🟢",
            title: "Opa!",
             // image: "",
            meaning: "Expression of hoy, celebration, encouragement 'Whoops' ",
            context: "Weddings, dancing, plate breaking, spilling something, dancing the syrtaki",
            usage_tip: "safe to use. Shout it when excited, when someone dances well, or when you drop something. Gets louder with more retsina🍷",
            equivalent: "🇬🇧 'Oops!', 'Woo', 'Let's go'",

            id: "gr-3",
            type: "gesture",
            icon: "🟡",
            title: "Palm out 'Mooutza'",
             // image: "",
            meaning: "Stop/Get lost",
            context: "Non-verbal insult",
            usage_tip: "Exercise caution. Only use playfully with close friends",
            equivalent: "🇬🇧 'nope''",


            id: "gr-4",
            type: "gesture",
            icon: "🔴",
            title: "Thumbs up 👍",
             // image: "",
            meaning: "Offensive gesture",
            context: "Can mean 'up yours'",
            usage_tip: "May offend if used, avoid!",
            equivalent: "🇬🇧 'Up yours''",

            
           

     
          


      
        }],

         code:'uk',
        label: "United Kingdom",
        flags:'🇬🇬🇧',
        mannerisms: [{
            // id: "gr-1",
            // type: "gesture",
            // icon: "🟢",
            // title: "Nod up",
            // meaning: "yes, approval",
            // context: "Friendly agreement",
            // usage_tip: "safe to use. Slight upward nod",

            // id: "gr-2",
            // type: "sound",
            // icon: "🟢",
            // title: "Opa!",
            //  // image: "",
            // meaning: "Expression of hoy, celebration, encouragement 'Whoops' ",
            // context: "Weddings, dancing, plate breaking, spilling something, dancing the syrtaki",
            // usage_tip: "safe to use. Shout it when excited, when someone dances well, or when you drop something. Gets louder with more retsina🍷",
            // equivalent: "🇬🇧 'Oops!', 'Woo', 'Let's go'",

            // id: "gr-3",
            // type: "gesture",
            // icon: "🟡",
            // title: "Palm out 'Mooutza'",
            //  // image: "",
            // meaning: "Stop/Get lost",
            // context: "Non-verbal insult",
            // usage_tip: "Exercise caution. Only use playfully with close friends",
            // equivalent: "🇬🇧 'nope''",


            // id: "gr-4",
            // type: "gesture",
            // icon: "🔴",
            // title: "Thumbs up 👍",
            //  // image: "",
            // meaning: "Offensive gesture",
            // context: "Can mean 'up yours'",
            // usage_tip: "May offend if used, avoid!",
            // equivalent: "🇬🇧 'Up yours''",


          }]
          }]
        

      
    





