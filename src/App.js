import { useState } from "react";

const database = [
  // {
  //   id: 123125,
  //   name: "Test",
  //   image: "https://i.pravatar.cc/48?u=123125",
  //   messages: [
  //     {
  //       time: new Date("2024-06-15 10:25:15"),
  //       sent: false,
  //       text: "Middle message?",
  //     },
  //     {
  //       time: new Date("2024-06-15 10:25:16"),
  //       sent: false,
  //       text: "Lastest messages?",
  //     },
  //     {
  //       time: new Date("2024-06-15 10:25:11"),
  //       sent: false,
  //       text: "First messages?",
  //     },
  //   ],
  // },
  {
    id: 130701,
    name: "Mladen",
    image: "https://i.pravatar.cc/48?u=130701",
    messages: [
      {
        time: new Date("2024-06-18 10:25:10"),
        sent: false,
        text: "Hello, how is it going?",
      },
      {
        time: new Date("2024-06-18 10:25:11"),
        sent: false,
        text: "Where are you now?",
      },
      {
        time: new Date("2024-06-18 10:25:12"),
        sent: false,
        text: "How do you feel today in the evening and in the morning and every where?",
      },
      {
        time: new Date("2024-06-18 10:25:15"),
        sent: true,
        text: "Great, thanks!",
      },
      {
        time: new Date("2024-06-18 10:35:18"),
        sent: true,
        text: "Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader,",
      },
      {
        time: new Date("2024-06-18 10:25:30"),
        sent: false,
        text: "I'm also fine",
      },
      {
        time: new Date("2024-06-10 10:25:30"),
        sent: false,
        text: "Are you available tomorrow?",
      },
    ],
  },
  {
    id: 310793,
    name: "Jovanka",
    image: "https://i.pravatar.cc/48?u=310793",
    messages: [
      {
        time: new Date("2024-06-19 10:30:10"),
        sent: false,
        text: "Hello, it is Jovanka. How is it going?",
      },
      {
        time: new Date("2024-06-19 10:36:12"),
        sent: false,
        text: "Whant to go out for a coffee?",
      },
      {
        time: new Date("2024-06-19 10:30:15"),
        sent: true,
        text: "Hi Jovanka. Great, thanks!",
      },
      {
        time: new Date("2024-06-19 10:30:19"),
        sent: true,
        text: "Sure I want!",
      },
      {
        time: new Date("2024-06-19 10:30:30"),
        sent: false,
        text: "Then let's go out!",
      },
    ],
  },
  {
    id: 123125,
    name: "Jovan",
    image: "https://i.pravatar.cc/48?u=123125",
    messages: [],
  },
  {
    id: 456789,
    name: "Milan",
    image: "https://i.pravatar.cc/48?u=456785",
    messages: [
      {
        time: new Date("2024-07-01 09:15:10"),
        sent: false,
        text: "Hey, are you coming to the meeting today?",
      },
      {
        time: new Date("2024-07-01 09:17:30"),
        sent: true,
        text: "Yes, I'll be there in 10 minutes.",
      },
      {
        time: new Date("2024-07-01 09:20:10"),
        sent: false,
        text: "Awesome, see you soon.",
      },
      {
        time: new Date("2024-07-02 11:25:15"),
        sent: true,
        text: "Did you get the report I sent yesterday?",
      },
      {
        time: new Date("2024-07-02 11:30:10"),
        sent: false,
        text: "Yes, I did. It looks great!",
      },
      {
        time: new Date("2024-07-03 10:25:30"),
        sent: true,
        text: "Let's grab lunch together today.",
      },
      {
        time: new Date("2024-07-03 10:26:45"),
        sent: false,
        text: "Sure, what time?",
      },
      {
        time: new Date("2024-07-03 10:27:10"),
        sent: true,
        text: "How about 1 PM?",
      },
      {
        time: new Date("2024-07-04 08:25:30"),
        sent: false,
        text: "Don't forget about the presentation tomorrow.",
      },
      {
        time: new Date("2024-07-04 08:30:10"),
        sent: true,
        text: "Thanks for the reminder. I've prepared everything.",
      },
      {
        time: new Date("2024-07-04 08:45:20"),
        sent: false,
        text: "Great! See you then.",
      },
      {
        time: new Date("2024-07-05 12:15:10"),
        sent: true,
        text: "How did the presentation go?",
      },
      {
        time: new Date("2024-07-05 12:20:30"),
        sent: false,
        text: "It went really well. Thanks for your help!",
      },
      {
        time: new Date("2024-07-05 14:25:30"),
        sent: true,
        text: "Want to join us for a movie tonight?",
      },
      {
        time: new Date("2024-07-05 14:30:10"),
        sent: false,
        text: "I'd love to! What time?",
      },
      {
        time: new Date("2024-07-05 14:32:30"),
        sent: true,
        text: "8 PM. See you there!",
      },
      {
        time: new Date("2024-07-05 16:15:10"),
        sent: false,
        text: "Can you send me the files from the last meeting?",
      },
      {
        time: new Date("2024-07-05 16:20:10"),
        sent: true,
        text: "Sure, I'll send them over right now.",
      },
      {
        time: new Date("2024-07-05 16:25:30"),
        sent: false,
        text: "Got them. Thanks!",
      },
      {
        time: new Date("2024-07-04 18:15:10"),
        sent: true,
        text: "Are we still on for the weekend trip?",
      },
      {
        time: new Date("2024-07-04 18:20:10"),
        sent: false,
        text: "Yes, can't wait!",
      },
      {
        time: new Date("2024-07-04 18:25:10"),
        sent: true,
        text: "It's going to be awesome.",
      },
      {
        time: new Date("2024-06-04 10:15:10"),
        sent: false,
        text: "Do you need any help with the project?",
      },
      {
        time: new Date("2024-06-04 10:20:10"),
        sent: true,
        text: "I've got it covered, but thanks for offering!",
      },
      {
        time: new Date("2024-06-10 12:15:10"),
        sent: false,
        text: "Can we reschedule our meeting to the afternoon?",
      },
      {
        time: new Date("2024-06-10 12:20:10"),
        sent: true,
        text: "No problem. How about 3 PM?",
      },
      {
        time: new Date("2024-06-11 14:15:10"),
        sent: false,
        text: "3 PM works for me.",
      },
      {
        time: new Date("2024-06-11 14:20:10"),
        sent: false,
        text: "Great, see you then.",
      },
      {
        time: new Date("2024-06-12 16:15:10"),
        sent: false,
        text: "Do you want to join the team dinner tonight?",
      },
      {
        time: new Date("2024-06-12 16:20:10"),
        sent: true,
        text: "Yes, looking forward to it!",
      },
    ],
  },
  {
    id: 789456,
    name: "Milovan",
    image: "https://i.pravatar.cc/48?u=789455",
    messages: [
      {
        time: new Date("2024-07-01 08:25:10"),
        sent: true,
        text: "Good morning! How are you?",
      },
      {
        time: new Date("2024-07-01 08:30:10"),
        sent: false,
        text: "Good morning! I'm doing well, thanks. How about you?",
      },
      {
        time: new Date("2024-07-01 08:35:10"),
        sent: true,
        text: "I'm great, thanks! Did you finish the project?",
      },
      {
        time: new Date("2024-07-01 08:40:10"),
        sent: false,
        text: "Yes, just wrapped it up. It looks good.",
      },
      {
        time: new Date("2024-07-02 09:15:10"),
        sent: true,
        text: "Are you joining us for lunch today?",
      },
      {
        time: new Date("2024-07-02 09:20:10"),
        sent: false,
        text: "Sure, where are you planning to go?",
      },
      {
        time: new Date("2024-07-02 09:25:10"),
        sent: true,
        text: "Let's meet at our usual spot at 12 PM.",
      },
      {
        time: new Date("2024-07-03 11:30:10"),
        sent: true,
        text: "How was your weekend?",
      },
      {
        time: new Date("2024-07-03 11:35:10"),
        sent: false,
        text: "It was relaxing. I went hiking. What about you?",
      },
      {
        time: new Date("2024-07-04 13:25:10"),
        sent: true,
        text: "Can we discuss the new project tomorrow morning?",
      },
      {
        time: new Date("2024-07-04 13:30:10"),
        sent: false,
        text: "Sure, I'll be available after 10 AM.",
      },
      {
        time: new Date("2024-07-05 15:20:10"),
        sent: true,
        text: "I'm organizing a team dinner this Friday. Are you in?",
      },
      {
        time: new Date("2024-07-05 15:25:10"),
        sent: false,
        text: "Count me in! What time?",
      },
      {
        time: new Date("2024-07-05 15:30:10"),
        sent: true,
        text: "7 PM at the Italian place.",
      },
      {
        time: new Date("2024-07-05 17:15:10"),
        sent: false,
        text: "Perfect! Looking forward to it.",
      },
      {
        time: new Date("2024-07-05 10:25:10"),
        sent: true,
        text: "Do you have the latest update on the client meeting?",
      },
      {
        time: new Date("2024-07-05 10:30:10"),
        sent: false,
        text: "Yes, I'll send it to you right now.",
      },
      {
        time: new Date("2024-07-04 14:20:10"),
        sent: true,
        text: "How are things going with the new hire?",
      },
      {
        time: new Date("2024-07-04 14:25:10"),
        sent: false,
        text: "They're settling in well. Seems like a good fit.",
      },
      {
        time: new Date("2024-06-04 16:30:10"),
        sent: true,
        text: "Want to catch a movie this weekend?",
      },
      {
        time: new Date("2024-06-04 16:35:10"),
        sent: false,
        text: "Sure! Let's go on Saturday evening.",
      },
      {
        time: new Date("2024-06-10 19:25:10"),
        sent: true,
        text: "Sounds good. I'll book the tickets.",
      },
      {
        time: new Date("2024-06-10 19:30:10"),
        sent: false,
        text: "Great, thanks!",
      },
      {
        time: new Date("2024-06-11 11:15:10"),
        sent: true,
        text: "Could you send me the agenda for tomorrow's meeting?",
      },
      {
        time: new Date("2024-06-11 11:20:10"),
        sent: false,
        text: "Sure, I'll forward it to you right away.",
      },
      {
        time: new Date("2024-06-12 09:25:10"),
        sent: true,
        text: "Are you available for a quick call later today?",
      },
      {
        time: new Date("2024-06-12 09:30:10"),
        sent: false,
        text: "Yes, around 4 PM works for me.",
      },
      {
        time: new Date("2024-06-12 09:35:10"),
        sent: true,
        text: "Great, I'll set up the meeting.",
      },
    ],
  },
  {
    id: 654321,
    name: "Filip",
    image: "https://i.pravatar.cc/48?u=654321",
    messages: [
      {
        time: new Date("2024-07-01 11:25:10"),
        sent: false,
        text: "Hey! How's your day going?",
      },
      {
        time: new Date("2024-07-01 11:30:10"),
        sent: true,
        text: "Hey! It's going well. Just busy with work. You?",
      },
      {
        time: new Date("2024-07-01 11:35:10"),
        sent: false,
        text: "Same here. Have you heard about the new project?",
      },
      {
        time: new Date("2024-07-01 11:40:10"),
        sent: true,
        text: "Yes, it sounds exciting. Looking forward to it.",
      },
      {
        time: new Date("2024-07-02 13:15:10"),
        sent: false,
        text: "Are you attending the training session tomorrow?",
      },
      {
        time: new Date("2024-07-02 13:20:10"),
        sent: true,
        text: "Yes, I've already signed up for it.",
      },
      {
        time: new Date("2024-07-02 13:25:10"),
        sent: false,
        text: "Great! See you there.",
      },
      {
        time: new Date("2024-07-03 15:30:10"),
        sent: true,
        text: "How did your presentation go?",
      },
      {
        time: new Date("2024-07-03 15:35:10"),
        sent: false,
        text: "It went well. Thanks for asking!",
      },
      {
        time: new Date("2024-07-04 17:25:10"),
        sent: false,
        text: "Do you have time to grab a coffee this afternoon?",
      },
      {
        time: new Date("2024-07-04 17:30:10"),
        sent: true,
        text: "Sorry, I have a meeting. Maybe tomorrow?",
      },
      {
        time: new Date("2024-07-05 09:20:10"),
        sent: false,
        text: "Sure, let's plan for tomorrow then.",
      },
      {
        time: new Date("2024-07-05 09:25:10"),
        sent: true,
        text: "Sounds good.",
      },
      {
        time: new Date("2024-07-05 12:15:10"),
        sent: true,
        text: "Are you attending the conference next month?",
      },
      {
        time: new Date("2024-07-05 12:20:10"),
        sent: false,
        text: "Yes, I've already registered. Are you?",
      },
      {
        time: new Date("2024-07-05 12:25:10"),
        sent: true,
        text: "Yes, looking forward to it.",
      },
      {
        time: new Date("2024-07-05 14:30:10"),
        sent: false,
        text: "Have you seen the latest project update?",
      },
      {
        time: new Date("2024-07-05 14:35:10"),
        sent: true,
        text: "Yes, it's impressive. We're making good progress.",
      },
      {
        time: new Date("2024-07-04 16:25:10"),
        sent: true,
        text: "Let's discuss the new strategy next week.",
      },
    ],
  },
  {
    id: 987655,
    name: "Ljuba",
    image: "https://i.pravatar.cc/48?u=987654",
    messages: [
      {
        time: new Date("2024-07-01 14:25:10"),
        sent: false,
        text: "Hi Ljuba, how was your weekend?",
      },
      {
        time: new Date("2024-07-01 14:30:10"),
        sent: true,
        text: "Hey! It was great, thanks. How about yours?",
      },
      {
        time: new Date("2024-07-01 14:35:10"),
        sent: false,
        text: "It was relaxing. Did you do anything fun?",
      },
      {
        time: new Date("2024-07-01 14:40:10"),
        sent: true,
        text: "Yes, I went to a concert on Saturday. It was amazing.",
      },
      {
        time: new Date("2024-07-02 16:20:10"),
        sent: false,
        text: "That sounds fun! How was the band?",
      },
      {
        time: new Date("2024-07-02 16:25:10"),
        sent: true,
        text: "They were really good. You should check them out next time.",
      },
      {
        time: new Date("2024-07-03 10:30:10"),
        sent: false,
        text: "I definitely will. By the way, did you see the email from the client?",
      },
      {
        time: new Date("2024-07-03 10:35:10"),
        sent: true,
        text: "Yes, I'm drafting a response now. It's urgent, right?",
      },
      {
        time: new Date("2024-07-03 10:40:10"),
        sent: false,
        text: "Yes, they need an answer by noon today.",
      },
      {
        time: new Date("2024-07-04 12:15:10"),
        sent: true,
        text: "Let's grab lunch together tomorrow.",
      },
      {
        time: new Date("2024-07-04 12:20:10"),
        sent: false,
        text: "Sure, where do you want to go?",
      },
      {
        time: new Date("2024-07-04 12:25:10"),
        sent: true,
        text: "How about that new place near the park?",
      },
      {
        time: new Date("2024-07-05 09:30:10"),
        sent: false,
        text: "Sounds good. See you there at 12 PM?",
      },
      {
        time: new Date("2024-07-05 09:35:10"),
        sent: true,
        text: "Perfect! See you tomorrow.",
      },
      {
        time: new Date("2024-07-05 14:25:10"),
        sent: false,
        text: "Did you hear about the changes in the project timeline?",
      },
      {
        time: new Date("2024-07-05 14:30:10"),
        sent: true,
        text: "Yes, I got the update. It's going to be challenging, but we'll manage.",
      },
      {
        time: new Date("2024-07-05 16:20:10"),
        sent: true,
        text: "Can you review the presentation slides for tomorrow?",
      },
      {
        time: new Date("2024-07-05 16:25:10"),
        sent: false,
        text: "Sure, I'll take a look and give you feedback.",
      },
      {
        time: new Date("2024-07-04 11:30:10"),
        sent: false,
        text: "Thanks! Let's meet after lunch to discuss it.",
      },
      {
        time: new Date("2024-07-04 11:35:10"),
        sent: true,
        text: "Sounds like a plan.",
      },
    ],
  },
  {
    id: 246810,
    name: "Ana",
    image: "https://i.pravatar.cc/48?u=246812",
    messages: [
      {
        time: new Date("2024-07-01 09:25:10"),
        sent: false,
        text: "Hi there! How have you been?",
      },
      {
        time: new Date("2024-07-01 09:30:10"),
        sent: true,
        text: "Hey Ana! I've been good, thanks. What about you?",
      },
      {
        time: new Date("2024-07-01 09:35:10"),
        sent: false,
        text: "I'm doing great, thanks! Did you hear about the upcoming event?",
      },
      {
        time: new Date("2024-07-01 09:40:10"),
        sent: true,
        text: "Yes, I saw the invite. Looking forward to it!",
      },
      {
        time: new Date("2024-07-02 10:15:10"),
        sent: true,
        text: "Are you free for a call later today?",
      },
      {
        time: new Date("2024-07-02 10:20:10"),
        sent: false,
        text: "Sure, around 3 PM works for me.",
      },
      {
        time: new Date("2024-07-02 10:25:10"),
        sent: true,
        text: "Great, I'll schedule it.",
      },
      {
        time: new Date("2024-07-03 11:30:10"),
        sent: false,
        text: "How's the new project going?",
      },
      {
        time: new Date("2024-07-03 11:35:10"),
        sent: true,
        text: "It's going well. We're making good progress.",
      },
      {
        time: new Date("2024-07-04 12:20:10"),
        sent: false,
        text: "That's good to hear. Keep me updated!",
      },
      {
        time: new Date("2024-07-04 12:25:10"),
        sent: true,
        text: "Will do!",
      },
      {
        time: new Date("2024-07-05 14:30:10"),
        sent: false,
        text: "Are you attending the conference next month?",
      },
      {
        time: new Date("2024-07-05 14:35:10"),
        sent: true,
        text: "Yes, I've already registered. Are you going?",
      },
      {
        time: new Date("2024-07-05 14:40:10"),
        sent: false,
        text: "Not sure yet, but I'll let you know.",
      },
    ],
  },
  {
    id: 135792,
    name: "Marko",
    image: "https://i.pravatar.cc/48?u=135792",
    messages: [
      {
        time: new Date("2024-07-01 08:30:10"),
        sent: false,
        text: "Hey Marko! How's it going?",
      },
      {
        time: new Date("2024-07-01 08:35:10"),
        sent: true,
        text: "Hey! I'm good, thanks. What about you?",
      },
      {
        time: new Date("2024-07-01 08:40:10"),
        sent: false,
        text: "I'm great, just busy with work.",
      },
      {
        time: new Date("2024-07-02 09:15:10"),
        sent: true,
        text: "Did you see the latest football match?",
      },
      {
        time: new Date("2024-07-02 09:20:10"),
        sent: false,
        text: "Yes! It was intense. What a game!",
      },
      {
        time: new Date("2024-07-03 10:30:10"),
        sent: true,
        text: "Are you coming to the party next weekend?",
      },
      {
        time: new Date("2024-07-03 10:35:10"),
        sent: false,
        text: "Of course! Wouldn't miss it.",
      },
      {
        time: new Date("2024-07-04 11:20:10"),
        sent: false,
        text: "Great! It's going to be a blast.",
      },
      {
        time: new Date("2024-07-04 11:25:10"),
        sent: true,
        text: "Looking forward to it.",
      },
      {
        time: new Date("2024-07-05 13:30:10"),
        sent: true,
        text: "Can you send me the presentation slides by tomorrow?",
      },
      {
        time: new Date("2024-07-05 13:35:10"),
        sent: false,
        text: "Sure, I'll email them to you later today.",
      },
      {
        time: new Date("2024-07-05 15:25:10"),
        sent: true,
        text: "Thanks! Let's meet to discuss it.",
      },
    ],
  },
  {
    id: 369258,
    name: "Nina",
    image: "https://i.pravatar.cc/48?u=369256",
    messages: [
      {
        time: new Date("2024-07-01 10:25:10"),
        sent: false,
        text: "Hi Nina! How's your day so far?",
      },
      {
        time: new Date("2024-07-01 10:30:10"),
        sent: true,
        text: "Hey! It's going well. How about you?",
      },
      {
        time: new Date("2024-07-01 10:35:10"),
        sent: false,
        text: "I'm good, thanks. Have you seen the new movie?",
      },
      {
        time: new Date("2024-07-01 10:40:10"),
        sent: true,
        text: "Not yet, but I heard it's really good.",
      },
      {
        time: new Date("2024-07-02 11:15:10"),
        sent: true,
        text: "Let's go watch it together this weekend!",
      },
      {
        time: new Date("2024-07-02 11:20:10"),
        sent: false,
        text: "Sure, sounds like a plan!",
      },
      {
        time: new Date("2024-07-03 12:30:10"),
        sent: false,
        text: "What time works best for you?",
      },
      {
        time: new Date("2024-07-03 12:35:10"),
        sent: true,
        text: "How about Saturday evening?",
      },
      {
        time: new Date("2024-07-03 12:40:10"),
        sent: false,
        text: "That works for me. Let's meet at 7 PM.",
      },
      {
        time: new Date("2024-07-04 14:25:10"),
        sent: true,
        text: "See you then!",
      },
    ],
  },
  {
    id: 987654,
    name: "Sara",
    image: "https://i.pravatar.cc/48?u=987662",
    messages: [
      {
        time: new Date("2024-07-01 15:25:10"),
        sent: false,
        text: "Hi Sara! How was your weekend?",
      },
      {
        time: new Date("2024-07-01 15:30:10"),
        sent: true,
        text: "Hey! It was great, thanks. How about yours?",
      },
      {
        time: new Date("2024-07-01 15:35:10"),
        sent: false,
        text: "It was relaxing. Did you do anything fun?",
      },
      {
        time: new Date("2024-07-01 15:40:10"),
        sent: true,
        text: "Yes, I went hiking with some friends.",
      },
      {
        time: new Date("2024-07-02 16:20:10"),
        sent: false,
        text: "That sounds fun! How was the weather?",
      },
      {
        time: new Date("2024-07-02 16:25:10"),
        sent: true,
        text: "It was perfect for hiking. Clear skies and cool breeze.",
      },
      {
        time: new Date("2024-07-03 10:30:10"),
        sent: false,
        text: "I definitely need to join you next time!",
      },
      {
        time: new Date("2024-07-03 10:35:10"),
        sent: true,
        text: "Absolutely! Let's plan another trip soon.",
      },
    ],
  },
  {
    id: 369259,
    name: "Ivan",
    image: "https://i.pravatar.cc/48?u=369258",
    messages: [
      {
        time: new Date("2024-07-01 10:25:10"),
        sent: false,
        text: "Hi Ivan! How's your day so far?",
      },
      {
        time: new Date("2024-07-01 10:30:10"),
        sent: true,
        text: "Hey! It's going well. How about you?",
      },
      {
        time: new Date("2024-07-01 10:35:10"),
        sent: false,
        text: "I'm good, thanks. Have you seen the latest movie?",
      },
      {
        time: new Date("2024-07-01 10:40:10"),
        sent: true,
        text: "Not yet, but I heard it's really good.",
      },
      {
        time: new Date("2024-07-02 11:15:10"),
        sent: true,
        text: "Let's go watch it together this weekend!",
      },
      {
        time: new Date("2024-07-02 11:20:10"),
        sent: false,
        text: "Sure, sounds like a plan!",
      },
    ],
  },
  {
    id: 753951,
    name: "Marija",
    image: "https://i.pravatar.cc/48?u=753952",
    messages: [
      {
        time: new Date("2024-07-01 12:25:10"),
        sent: false,
        text: "Hey Marija! How's your day going?",
      },
      {
        time: new Date("2024-07-01 12:30:10"),
        sent: true,
        text: "Hey! It's been busy, but good. What about you?",
      },
      {
        time: new Date("2024-07-01 12:35:10"),
        sent: false,
        text: "I'm doing well. Have you tried the new cafe downtown?",
      },
      {
        time: new Date("2024-07-01 12:40:10"),
        sent: true,
        text: "Not yet, but I've heard it's really cozy.",
      },
      {
        time: new Date("2024-07-02 13:20:10"),
        sent: true,
        text: "Let's meet there for coffee tomorrow afternoon.",
      },
      {
        time: new Date("2024-07-02 13:25:10"),
        sent: false,
        text: "Sounds great! What time?",
      },
      {
        time: new Date("2024-07-02 13:30:10"),
        sent: true,
        text: "Around 3 PM works for me.",
      },
    ],
  },
];

function formatDate(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const now = new Date();
  const messageDate = new Date(date);

  const isToday = now.toDateString() === messageDate.toDateString();
  const isThisWeek =
    now - messageDate < 7 * 24 * 60 * 60 * 1000 &&
    now.getDay() >= messageDate.getDay();

  if (isToday) {
    const hours = messageDate.getHours().toString().padStart(2, "0");
    const minutes = messageDate.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  } else if (isThisWeek) {
    return daysOfWeek[messageDate.getDay()];
  } else {
    const day = messageDate.getDate().toString().padStart(2, "0");
    const month = (messageDate.getMonth() + 1).toString().padStart(2, "0"); // Meseci idu od 0 do 11
    const year = messageDate.getFullYear().toString().slice(-2); // Zadnje dve cifre godine
    return `${day}/${month}/${year}`;
  }
}

function formatMessageDate(date) {
  const now = new Date();
  const messageDate = new Date(date);

  const isSameDay = now.toDateString() === messageDate.toDateString();
  const isYesterday =
    new Date(now.setDate(now.getDate() - 1)).toDateString() ===
    messageDate.toDateString();
  const isSameWeek =
    now - messageDate < 7 * 24 * 60 * 60 * 1000 &&
    now.getDay() >= messageDate.getDay();

  const options = { hour: "2-digit", minute: "2-digit" };

  if (isSameDay) {
    return messageDate.toLocaleTimeString([], options);
  } else if (isYesterday) {
    return `Yesterday at ${messageDate.toLocaleTimeString([], options)}`;
  } else if (isSameWeek) {
    return `${messageDate.toLocaleDateString("en-GB", {
      weekday: "long",
    })} at ${messageDate.toLocaleTimeString([], options)}`;
  } else {
    return `${messageDate.toLocaleDateString("sr-RS", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })} at ${messageDate.toLocaleTimeString([], options)}`;
  }
}

export default function App() {
  const [contacts, setContacts] = useState(database);
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [search, setSearch] = useState("");

  function handleSelection(contact) {
    // setSelectedFriend(friend);
    setSelectedContact((cur) => (cur?.name === contact.name ? null : contact));
  }

  function handleShowNewMessage() {
    setShowNewMessage((show) => !show);

    if (showNewMessage === true) {
      setSelectedContact(null);
    }
  }

  function handleReceiverInput(receiver, submit) {
    const result = contacts.find(
      ({ name }) => name.toLocaleLowerCase() === receiver.toLocaleLowerCase()
    );

    if (result && submit) {
      setShowNewMessage(false);
      setSelectedContact(result);
      return;
    } else {
      setSelectedContact(receiver);
    }
  }

  function addMessage(newMessage) {
    setContacts((prevDatabase) => {
      return prevDatabase.map((contact) => {
        if (contact.name === selectedContact.name) {
          contact.messages = [...contact.messages, newMessage];
        }
        return contact;
      });
    });
  }

  function handleSendMessage(message) {
    message = message.trim();
    const newMessage = { time: new Date(), sent: true, text: `${message}` };
    if (typeof selectedContact === "object" && selectedContact !== null) {
      addMessage(newMessage);
      return;
    } else {
      const id = crypto.randomUUID();
      const newContact = {
        id: id,
        name: `${selectedContact}`,
        image: `https://i.pravatar.cc/48?u=${id}`,
        messages: [newMessage],
      };
      setContacts((contacts) => [...contacts, newContact]);
      setSelectedContact(newContact);
      setShowNewMessage(false);
    }
  }

  function handleSearch(input) {
    setSearch(input);
  }

  return (
    <div className="app">
      {!selectedContact && !showNewMessage && (
        <div className="main">
          <Title onClick={handleShowNewMessage} />
          <SearchBox onSearch={handleSearch} search={search} />
          <ContactList
            contactList={contacts}
            onSelection={handleSelection}
            searchInput={search}
          />
        </div>
      )}

      {showNewMessage && (
        <div className="new-message">
          <NewMessage
            onClick={handleShowNewMessage}
            onReceiverInput={handleReceiverInput}
          />
          <InputBox
            selectedContact={selectedContact}
            onSend={handleSendMessage}
          />
        </div>
      )}

      {selectedContact && (
        <div className="message-view">
          <MessageView
            selectedContact={selectedContact}
            onSelection={handleSelection}
          />
          <Messages selectedContact={selectedContact} />
          <InputBox
            selectedContact={selectedContact}
            onSend={handleSendMessage}
          />
        </div>
      )}
    </div>
  );
}

function Title({ onClick }) {
  return (
    <div className="main-header">
      <h1 className="title">Messages</h1>
      <ion-icon name="create-outline" onClick={() => onClick()}></ion-icon>
    </div>
  );
}

function SearchBox({ onSearch, search }) {
  function handleChange(e) {
    e.preventDefault();

    onSearch(e.target.value);
  }

  return (
    <form className="search-box">
      <ion-icon name="search-outline"></ion-icon>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={search}
      />
      <ion-icon name="mic-outline"></ion-icon>
    </form>
  );
}
function ContactList({ contactList, onSelection, searchInput }) {
  return (
    <ul className="contacts">
      {contactList
        .filter((contact) => contact.messages.length > 0)
        .filter((contact) => {
          return (
            contact.name
              .toLowerCase()
              .includes(searchInput.trim().toLowerCase()) ||
            contact.messages.some((message) =>
              message.text
                .toLowerCase()
                .includes(searchInput.trim().toLowerCase())
            )
          );
        })
        .sort((a, b) => {
          const latestMessageA = new Date(
            Math.max(...a.messages.map((msg) => msg.time))
          );
          const latestMessageB = new Date(
            Math.max(...b.messages.map((msg) => msg.time))
          );
          return latestMessageB - latestMessageA;
        })
        .map((contact) => (
          <Contact
            contact={contact}
            key={contact.id}
            onSelection={onSelection}
          />
        ))}
    </ul>
  );
}

function Contact({ contact, onSelection }) {
  return (
    <div className="contact" onClick={() => onSelection(contact)}>
      <img src={contact.image} alt="contact" className="contact__image" />
      <div className="contact__text">
        <div className="contact__header">
          <h4 className="contact__name">{contact.name}</h4>
          <div className="contact__time">
            <span>
              {formatDate(
                contact.messages
                  .sort((a, b) => new Date(b.time) - new Date(a.time))[0]
                  .time.toISOString()
              )}
            </span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
        <p className="message-text">
          {contact.messages[contact.messages.length - 1].text}
        </p>
      </div>
    </div>
  );
}

function MessageView({ selectedContact, onSelection }) {
  return (
    <div>
      <div className="chat">
        <div className="chat__header">
          <ion-icon
            name="chevron-back-outline"
            className="message-icons"
            onClick={() => onSelection(selectedContact)}
          ></ion-icon>
          <figure className="sender">
            <img
              src={selectedContact.image}
              alt="contact picture"
              className="sender__image"
            />

            <figcaption className="sender__name">
              <p>{selectedContact.name}</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </figcaption>
          </figure>
          <ion-icon
            name="videocam-outline"
            className="message-icons"
          ></ion-icon>
        </div>
      </div>
    </div>
  );
}

function Messages({ selectedContact }) {
  //TODO namesti da pocetna pozicija scrolla bude na dnu
  const isMoreThanFiveMinutesLater = (date1, date2) => {
    const fiveMinutesInMillis = 5 * 60 * 1000;
    return date2.getTime() - date1.getTime() > fiveMinutesInMillis;
  };

  return (
    <div className="conversation">
      {selectedContact.messages
        ?.sort((a, b) => new Date(a.time) - new Date(b.time))
        .map((message, i) => {
          let stampTime = false;
          let isLast = false;

          if (
            i === 0 ||
            isMoreThanFiveMinutesLater(
              selectedContact.messages[i - 1].time,
              message.time
            )
          ) {
            stampTime = true;
          }

          if (
            i + 1 === selectedContact.messages.length ||
            message.sent !== selectedContact.messages[i + 1].sent ||
            (i > 0 &&
              isMoreThanFiveMinutesLater(
                message.time,
                selectedContact.messages[i + 1].time
              ))
          ) {
            isLast = true;
          }

          return (
            <Message message={message} stampTime={stampTime} isLast={isLast} />
          );
        })}
    </div>
  );
}

function Message({ message, stampTime, isLast }) {
  return (
    <div>
      <div className={`messages ${message.sent ? "sent" : "received"}`}>
        <div className="message">
          {stampTime && (
            <div className="message__time">
              {formatMessageDate(message.time)}
            </div>
          )}
          <p className={`message__text ${isLast ? "last" : ""}`}>
            {message.text}
          </p>
        </div>
      </div>
    </div>
  );
}

function InputBox({ selectedContact, onSend }) {
  const [inputMessage, setInputMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (inputMessage === "") return;
    if (selectedContact === null) return;

    onSend(inputMessage);
    setInputMessage("");
  }

  return (
    <form className="message-input-box" onSubmit={handleSubmit}>
      <input
        className="message-input"
        type="text"
        placeholder="iMessage"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      {inputMessage === "" ? (
        <ion-icon
          name="mic-outline"
          style={{ color: "#808080", cursor: "pointer" }}
        ></ion-icon>
      ) : (
        <ion-icon
          name="arrow-up-circle"
          className="message-submit"
          style={{
            color: selectedContact ? "#007aff" : "#808080",
            cursor: "pointer",
          }}
          onClick={selectedContact ? handleSubmit : null}
        ></ion-icon>
      )}
    </form>
  );
}

function NewMessage({ onClick, onReceiverInput }) {
  function handelSubmit(e) {
    e.preventDefault();
    onReceiverInput(e.target[0].value, true);
  }

  function handleChange(e) {
    e.preventDefault();

    if (!e.target.value) return;

    onReceiverInput(e.target.value, false);
  }

  return (
    <div className="new-message__open">
      <div className="new-message__header">
        <h3>New Message</h3>
        <p onClick={() => onClick()}>Cancel</p>
      </div>
      <form className="new-message__receiver" onSubmit={handelSubmit}>
        <label>To:</label>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
}
