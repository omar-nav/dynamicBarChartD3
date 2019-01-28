// https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-languages
const sample = [
  {
    Home_Library_Definition: "Chinatown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 282,
    "Total Checkouts": 469
  },
  {
    Home_Library_Definition: "Portola",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 102,
    "Total Checkouts": 256
  },
  {
    Home_Library_Definition: "Richmond",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 105,
    "Total Checkouts": 552
  },
  {
    Home_Library_Definition: "North Beach",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 1439,
    "Total Checkouts": 1245
  },
  {
    Home_Library_Definition: "Anza",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 272,
    "Total Checkouts": 421
  },
  {
    Home_Library_Definition: "Noe Valley/Sally Brunn",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 29,
    "Total Checkouts": 98
  },
  {
    Home_Library_Definition: "Anza",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 252,
    "Total Checkouts": 251
  },
  {
    Home_Library_Definition: "West Portal",
    Year: 2016,
    Month_number: 1,
    "Age Range": "60 to 64 years",
    "Total Renewals": 9,
    "Total Checkouts": 15
  },
  {
    Home_Library_Definition: "West Portal",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 268,
    "Total Checkouts": 430
  },
  {
    Home_Library_Definition: "Ocean View",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 645,
    "Total Checkouts": 1597
  },
  {
    Home_Library_Definition: "Glen Park",
    Year: 2016,
    Month_number: 5,
    "Age Range": "60 to 64 years",
    "Total Renewals": 60,
    "Total Checkouts": 88
  },
  {
    Home_Library_Definition: "Eureka Valley/Harvey Milk Memorial",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 442,
    "Total Checkouts": 604
  },
  {
    Home_Library_Definition: "Noe Valley/Sally Brunn",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 136,
    "Total Checkouts": 634
  },
  {
    Home_Library_Definition: "West Portal",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 280,
    "Total Checkouts": 922
  },
  {
    Home_Library_Definition: "Parkside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 263,
    "Total Checkouts": 952
  },
  {
    Home_Library_Definition: "Mission",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 475,
    "Total Checkouts": 723
  },
  {
    Home_Library_Definition: "Richmond",
    Year: 2016,
    Month_number: 7,
    "Age Range": "25 to 34 years",
    "Total Renewals": 246,
    "Total Checkouts": 302
  },
  {
    Home_Library_Definition: "Noe Valley/Sally Brunn",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 142,
    "Total Checkouts": 273
  },
  {
    Home_Library_Definition: "Glen Park",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 1106,
    "Total Checkouts": 1947
  },
  {
    Home_Library_Definition: "Main Library",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 1438,
    "Total Checkouts": 1070
  },
  {
    Home_Library_Definition: "Richmond",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 0,
    "Total Checkouts": 18
  },
  {
    Home_Library_Definition: "Noe Valley/Sally Brunn",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 409,
    "Total Checkouts": 747
  },
  {
    Home_Library_Definition: "Noe Valley/Sally Brunn",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 117,
    "Total Checkouts": 1034
  },
  {
    Home_Library_Definition: "Main Library",
    Year: 2016,
    Month_number: 1,
    "Age Range": "60 to 64 years",
    "Total Renewals": 47,
    "Total Checkouts": 77
  },
  {
    Home_Library_Definition: "Sunset",
    Year: 2016,
    Month_number: 5,
    "Age Range": "25 to 34 years",
    "Total Renewals": 19,
    "Total Checkouts": 31
  },
  {
    Home_Library_Definition: "Portola",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 690,
    "Total Checkouts": 1321
  },
  {
    Home_Library_Definition: "Richmond",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 159,
    "Total Checkouts": 334
  },
  {
    Home_Library_Definition: "Anza",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 8,
    "Total Checkouts": 146
  },
  {
    Home_Library_Definition: "Chinatown",
    Year: 2016,
    Month_number: 3,
    "Age Range": "55 to 59 years",
    "Total Renewals": 73,
    "Total Checkouts": 327
  },
  {
    Home_Library_Definition: "Glen Park",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 97,
    "Total Checkouts": 330
  },
  {
    Home_Library_Definition: "Glen Park",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 137,
    "Total Checkouts": 177
  },
  {
    Home_Library_Definition: "West Portal",
    Year: 2016,
    Month_number: 5,
    "Age Range": "65 to 74 years",
    "Total Renewals": 16,
    "Total Checkouts": 121
  },
  {
    Home_Library_Definition: "Merced",
    Year: 2016,
    Month_number: 5,
    "Age Range": "65 to 74 years",
    "Total Renewals": 163,
    "Total Checkouts": 193
  },
  {
    Home_Library_Definition: "Mission",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 418,
    "Total Checkouts": 431
  },
  {
    Home_Library_Definition: "Glen Park",
    Year: 2016,
    Month_number: 3,
    "Age Range": "65 to 74 years",
    "Total Renewals": 4,
    "Total Checkouts": 10
  },
  {
    Home_Library_Definition: "Potrero",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 108,
    "Total Checkouts": 296
  },
  {
    Home_Library_Definition: "Main Library",
    Year: 2016,
    Month_number: 5,
    "Age Range": "60 to 64 years",
    "Total Renewals": 8,
    "Total Checkouts": 123
  },
  {
    Home_Library_Definition: "Western Addition",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 137,
    "Total Checkouts": 281
  },
  {
    Home_Library_Definition: "Anza",
    Year: 2016,
    Month_number: 6,
    "Age Range": "45 to 54 years",
    "Total Renewals": 9,
    "Total Checkouts": 24
  },
  {
    Home_Library_Definition: "Richmond",
    Year: 2016,
    Month_number: 5,
    "Age Range": "35 to 44 years",
    "Total Renewals": 0,
    "Total Checkouts": 2
  },
  {
    Home_Library_Definition: "Main Library",
    Year: 2016,
    Month_number: 6,
    "Age Range": "55 to 59 years",
    "Total Renewals": 811,
    "Total Checkouts": 579
  },
  {
    Home_Library_Definition: "Anza",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 239,
    "Total Checkouts": 540
  },
  {
    Home_Library_Definition: "Main Library",
    Year: 2016,
    Month_number: 5,
    "Age Range": "65 to 74 years",
    "Total Renewals": 209,
    "Total Checkouts": 579
  },
  {
    Home_Library_Definition: "Glen Park",
    Year: 2016,
    Month_number: 6,
    "Age Range": "65 to 74 years",
    "Total Renewals": 50,
    "Total Checkouts": 142
  },
  {
    Home_Library_Definition: "Glen Park",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 484,
    "Total Checkouts": 4286
  },
  {
    Home_Library_Definition: "Park",
    Year: 2016,
    Month_number: 5,
    "Age Range": "55 to 59 years",
    "Total Renewals": 18,
    "Total Checkouts": 30
  },
  {
    Home_Library_Definition: "Glen Park",
    Year: 2016,
    Month_number: 5,
    "Age Range": "45 to 54 years",
    "Total Renewals": 28,
    "Total Checkouts": 78
  },
  {
    Home_Library_Definition: "Anza",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 199,
    "Total Checkouts": 123
  },
  {
    Home_Library_Definition: "Chinatown",
    Year: 2016,
    Month_number: 6,
    "Age Range": "55 to 59 years",
    "Total Renewals": 143,
    "Total Checkouts": 636
  },
  {
    Home_Library_Definition: "Parkside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "25 to 34 years",
    "Total Renewals": 1124,
    "Total Checkouts": 484
  },
  {
    Home_Library_Definition: "Mission Bay",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 293,
    "Total Checkouts": 570
  },
  {
    Home_Library_Definition: "Eureka Valley/Harvey Milk Memorial",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 173,
    "Total Checkouts": 231
  },
  {
    Home_Library_Definition: "Ortega",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 216,
    "Total Checkouts": 231
  },
  {
    Home_Library_Definition: "Main Library",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 11,
    "Total Checkouts": 409
  },
  {
    Home_Library_Definition: "Glen Park",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 357,
    "Total Checkouts": 945
  },
  {
    Home_Library_Definition: "Chinatown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 351,
    "Total Checkouts": 891
  },
  {
    Home_Library_Definition: "Presidio",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 79,
    "Total Checkouts": 304
  },
  {
    Home_Library_Definition: "Main Library",
    Year: 2016,
    Month_number: 6,
    "Age Range": "60 to 64 years",
    "Total Renewals": 0,
    "Total Checkouts": 7
  },
  {
    Home_Library_Definition: "Bernal Heights",
    Year: 2016,
    Month_number: 1,
    "Age Range": "60 to 64 years",
    "Total Renewals": 204,
    "Total Checkouts": 173
  },
  {
    Home_Library_Definition: "Noe Valley/Sally Brunn",
    Year: 2016,
    Month_number: 6,
    "Age Range": "65 to 74 years",
    "Total Renewals": 41,
    "Total Checkouts": 377
  },
  {
    Home_Library_Definition: "Presidio",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 325,
    "Total Checkouts": 880
  },
  {
    Home_Library_Definition: "Excelsior",
    Year: 2016,
    Month_number: 4,
    "Age Range": "35 to 44 years",
    "Total Renewals": 12,
    "Total Checkouts": 54
  },
  {
    Home_Library_Definition: "Bernal Heights",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 132,
    "Total Checkouts": 323
  },
  {
    Home_Library_Definition: "Portola",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 197,
    "Total Checkouts": 283
  },
  {
    Home_Library_Definition: "Glen Park",
    Year: 2016,
    Month_number: 5,
    "Age Range": "60 to 64 years",
    "Total Renewals": 9,
    "Total Checkouts": 61
  },
  {
    Home_Library_Definition: "North Beach",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 378,
    "Total Checkouts": 1009
  },
  {
    Home_Library_Definition: "Main Library",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 655,
    "Total Checkouts": 1192
  },
  {
    Home_Library_Definition: "Visitacion Valley",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 1439,
    "Total Checkouts": 1374
  },
  {
    Home_Library_Definition: "Sunset",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 757,
    "Total Checkouts": 777
  },
  {
    Home_Library_Definition: "Main Library",
    Year: 2016,
    Month_number: 3,
    "Age Range": "55 to 59 years",
    "Total Renewals": 254,
    "Total Checkouts": 336
  },
  {
    Home_Library_Definition: "Main Library",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 500,
    "Total Checkouts": 970
  },
  {
    Home_Library_Definition: "Marina",
    Year: 2016,
    Month_number: 6,
    "Age Range": "65 to 74 years",
    "Total Renewals": 5,
    "Total Checkouts": 44
  },
  {
    Home_Library_Definition: "Chinatown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 4,
    "Total Checkouts": 1303
  },
  {
    Home_Library_Definition: "Bayview/Linda Brooks-Burton",
    Year: 2016,
    Month_number: 6,
    "Age Range": "45 to 54 years",
    "Total Renewals": 2,
    "Total Checkouts": 104
  },
  {
    Home_Library_Definition: "Eureka Valley/Harvey Milk Memorial",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 72,
    "Total Checkouts": 281
  },
  {
    Home_Library_Definition: "Potrero",
    Year: 2016,
    Month_number: 6,
    "Age Range": "60 to 64 years",
    "Total Renewals": 20,
    "Total Checkouts": 35
  },
  {
    Home_Library_Definition: "Ortega",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 395,
    "Total Checkouts": 1256
  },
  {
    Home_Library_Definition: "Parkside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 310,
    "Total Checkouts": 597
  },
  {
    Home_Library_Definition: "Potrero",
    Year: 2016,
    Month_number: 2,
    "Age Range": "45 to 54 years",
    "Total Renewals": 48,
    "Total Checkouts": 99
  },
  {
    Home_Library_Definition: "Ortega",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 331,
    "Total Checkouts": 746
  },
  {
    Home_Library_Definition: "Presidio",
    Year: 2016,
    Month_number: 5,
    "Age Range": "55 to 59 years",
    "Total Renewals": 1,
    "Total Checkouts": 13
  },
  {
    Home_Library_Definition: "Noe Valley/Sally Brunn",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 901,
    "Total Checkouts": 887
  },
  {
    Home_Library_Definition: "Excelsior",
    Year: 2016,
    Month_number: 3,
    "Age Range": "35 to 44 years",
    "Total Renewals": 31,
    "Total Checkouts": 94
  },
  {
    Home_Library_Definition: "West Portal",
    Year: 2016,
    Month_number: 5,
    "Age Range": "65 to 74 years",
    "Total Renewals": 23,
    "Total Checkouts": 246
  },
  {
    Home_Library_Definition: "Bernal Heights",
    Year: 2016,
    Month_number: 4,
    "Age Range": "65 to 74 years",
    "Total Renewals": 31,
    "Total Checkouts": 84
  },
  {
    Home_Library_Definition: "Merced",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 148,
    "Total Checkouts": 1906
  },
  {
    Home_Library_Definition: "North Beach",
    Year: 2016,
    Month_number: 3,
    "Age Range": "65 to 74 years",
    "Total Renewals": 123,
    "Total Checkouts": 342
  },
  {
    Home_Library_Definition: "North Beach",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 109,
    "Total Checkouts": 510
  },
  {
    Home_Library_Definition: "Bernal Heights",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 1328,
    "Total Checkouts": 1836
  },
  {
    Home_Library_Definition: "Excelsior",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 38,
    "Total Checkouts": 61
  },
  {
    Home_Library_Definition: "Ortega",
    Year: 2016,
    Month_number: 4,
    "Age Range": "45 to 54 years",
    "Total Renewals": 33,
    "Total Checkouts": 58
  },
  {
    Home_Library_Definition: "Bayview/Linda Brooks-Burton",
    Year: 2016,
    Month_number: 4,
    "Age Range": "45 to 54 years",
    "Total Renewals": 15,
    "Total Checkouts": 26
  },
  {
    Home_Library_Definition: "West Portal",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 90,
    "Total Checkouts": 888
  },
  {
    Home_Library_Definition: "Parkside",
    Year: 2016,
    Month_number: 6,
    "Age Range": "65 to 74 years",
    "Total Renewals": 0,
    "Total Checkouts": 20
  },
  {
    Home_Library_Definition: "Richmond",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 852,
    "Total Checkouts": 2340
  },
  {
    Home_Library_Definition: "Marina",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 13,
    "Total Checkouts": 346
  },
  {
    Home_Library_Definition: "Chinatown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 976,
    "Total Checkouts": 3095
  },
  {
    Home_Library_Definition: "Richmond",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 1736,
    "Total Checkouts": 3880
  },
  {
    Home_Library_Definition: "Chinatown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 291,
    "Total Checkouts": 418
  },
  {
    Home_Library_Definition: "Sunset",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 84,
    "Total Checkouts": 125
  },
  {
    Home_Library_Definition: "Potrero",
    Year: 2016,
    Month_number: 2,
    "Age Range": "65 to 74 years",
    "Total Renewals": 73,
    "Total Checkouts": 260
  },
  {
    Home_Library_Definition: "Ortega",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 208,
    "Total Checkouts": 5673
  },
  {
    Home_Library_Definition: "Western Addition",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 903,
    "Total Checkouts": 852
  },
  {
    Home_Library_Definition: "Bernal Heights",
    Year: 2016,
    Month_number: 3,
    "Age Range": "45 to 54 years",
    "Total Renewals": 331,
    "Total Checkouts": 529
  },
  {
    Home_Library_Definition: "North Beach",
    Year: 2016,
    Month_number: 5,
    "Age Range": "45 to 54 years",
    "Total Renewals": 135,
    "Total Checkouts": 780
  },
  {
    Home_Library_Definition: "Mission",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 45,
    "Total Checkouts": 341
  },
  {
    Home_Library_Definition: "West Portal",
    Year: 2016,
    Month_number: 4,
    "Age Range": "65 to 74 years",
    "Total Renewals": 54,
    "Total Checkouts": 511
  },
  {
    Home_Library_Definition: "Ortega",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 769,
    "Total Checkouts": 1775
  },
  {
    Home_Library_Definition: "Richmond",
    Year: 2016,
    Month_number: 6,
    "Age Range": "60 to 64 years",
    "Total Renewals": 206,
    "Total Checkouts": 337
  },
  {
    Home_Library_Definition: "Ortega",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 3640,
    "Total Checkouts": 3728
  },
  {
    Home_Library_Definition: "Mission",
    Year: 2016,
    Month_number: 4,
    "Age Range": "35 to 44 years",
    "Total Renewals": 3,
    "Total Checkouts": 67
  },
  {
    Home_Library_Definition: "Ortega",
    Year: 2016,
    Month_number: 4,
    "Age Range": "35 to 44 years",
    "Total Renewals": 297,
    "Total Checkouts": 472
  },
  {
    Home_Library_Definition: "Sunset",
    Year: 2016,
    Month_number: 5,
    "Age Range": "65 to 74 years",
    "Total Renewals": 12,
    "Total Checkouts": 48
  },
  {
    Home_Library_Definition: "Parkside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 259,
    "Total Checkouts": 3321
  },
  {
    Home_Library_Definition: "Richmond",
    Year: 2016,
    Month_number: 6,
    "Age Range": "45 to 54 years",
    "Total Renewals": 34,
    "Total Checkouts": 256
  },
  {
    Home_Library_Definition: "Ingleside",
    Year: 2016,
    Month_number: 5,
    "Age Range": "35 to 44 years",
    "Total Renewals": 1362,
    "Total Checkouts": 1667
  },
  {
    Home_Library_Definition: "Excelsior",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 15,
    "Total Checkouts": 1991
  },
  {
    Home_Library_Definition: "Chinatown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 128,
    "Total Checkouts": 2283
  },
  {
    Home_Library_Definition: "Excelsior",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 157,
    "Total Checkouts": 798
  },
  {
    Home_Library_Definition: "Chinatown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 3,
    "Total Checkouts": 225
  },
  {
    Home_Library_Definition: "Richmond",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 22,
    "Total Checkouts": 163
  },
  {
    Home_Library_Definition: "Merced",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 270,
    "Total Checkouts": 532
  },
  {
    Home_Library_Definition: "Marina",
    Year: 2016,
    Month_number: 5,
    "Age Range": "65 to 74 years",
    "Total Renewals": 14,
    "Total Checkouts": 92
  },
  {
    Home_Library_Definition: "Bernal Heights",
    Year: 2016,
    Month_number: 6,
    "Age Range": "65 to 74 years",
    "Total Renewals": 563,
    "Total Checkouts": 476
  },
  {
    Home_Library_Definition: "Mission",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 5,
    "Total Checkouts": 1433
  },
  {
    Home_Library_Definition: "West Portal",
    Year: 2016,
    Month_number: 3,
    "Age Range": "60 to 64 years",
    "Total Renewals": 0,
    "Total Checkouts": 13
  },
  {
    Home_Library_Definition: "Eureka Valley/Harvey Milk Memorial",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 158,
    "Total Checkouts": 728
  },
  {
    Home_Library_Definition: "Excelsior",
    Year: 2016,
    Month_number: 6,
    "Age Range": "45 to 54 years",
    "Total Renewals": 89,
    "Total Checkouts": 137
  },
  {
    Home_Library_Definition: "West Portal",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 49,
    "Total Checkouts": 126
  },
  {
    Home_Library_Definition: "Noe Valley/Sally Brunn",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 96,
    "Total Checkouts": 204
  },
  {
    Home_Library_Definition: "Noe Valley/Sally Brunn",
    Year: 2016,
    Month_number: 6,
    "Age Range": "60 to 64 years",
    "Total Renewals": 109,
    "Total Checkouts": 315
  },
  {
    Home_Library_Definition: "Ocean View",
    Year: 2016,
    Month_number: 6,
    "Age Range": "35 to 44 years",
    "Total Renewals": 60,
    "Total Checkouts": 62
  },
  {
    Home_Library_Definition: "West Portal",
    Year: 2016,
    Month_number: 5,
    "Age Range": "65 to 74 years",
    "Total Renewals": 178,
    "Total Checkouts": 385
  },
  {
    Home_Library_Definition: "Noe Valley/Sally Brunn",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 24,
    "Total Checkouts": 238
  },
  {
    Home_Library_Definition: "Golden Gate Valley",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 76,
    "Total Checkouts": 525
  },
  {
    Home_Library_Definition: "Potrero",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 135,
    "Total Checkouts": 306
  },
  {
    Home_Library_Definition: "Anza",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 1899,
    "Total Checkouts": 1309
  },
  {
    Home_Library_Definition: "Marina",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 245,
    "Total Checkouts": 299
  },
  {
    Home_Library_Definition: "Merced",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 264,
    "Total Checkouts": 834
  },
  {
    Home_Library_Definition: "Sunset",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 345,
    "Total Checkouts": 956
  },
  {
    Home_Library_Definition: "Eureka Valley/Harvey Milk Memorial",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 776,
    "Total Checkouts": 2203
  },
  {
    Home_Library_Definition: "Merced",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 1110,
    "Total Checkouts": 948
  },
  {
    Home_Library_Definition: "Marina",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 229,
    "Total Checkouts": 303
  },
  {
    Home_Library_Definition: "Mission",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 1021,
    "Total Checkouts": 801
  },
  {
    Home_Library_Definition: "Bernal Heights",
    Year: 2016,
    Month_number: 1,
    "Age Range": "45 to 54 years",
    "Total Renewals": 3,
    "Total Checkouts": 40
  },
  {
    Home_Library_Definition: "Sunset",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 19,
    "Total Checkouts": 68
  },
  {
    Home_Library_Definition: "Mission",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 0,
    "Total Checkouts": 321
  },
  {
    Home_Library_Definition: "Anza",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 139,
    "Total Checkouts": 1788
  },
  {
    Home_Library_Definition: "Bayview/Linda Brooks-Burton",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 23,
    "Total Checkouts": 133
  },
  {
    Home_Library_Definition: "Ortega",
    Year: 2016,
    Month_number: 6,
    "Age Range": "45 to 54 years",
    "Total Renewals": 231,
    "Total Checkouts": 218
  },
  {
    Home_Library_Definition: "Parkside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 217,
    "Total Checkouts": 1077
  },
  {
    Home_Library_Definition: "Mission",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 761,
    "Total Checkouts": 1092
  },
  {
    Home_Library_Definition: "Ortega",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 1069,
    "Total Checkouts": 1339
  },
  {
    Home_Library_Definition: "Sunset",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 135,
    "Total Checkouts": 302
  },
  {
    Home_Library_Definition: "Ingleside",
    Year: 2016,
    Month_number: 3,
    "Age Range": "25 to 34 years",
    "Total Renewals": 181,
    "Total Checkouts": 440
  },
  {
    Home_Library_Definition: "Sunset",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 456,
    "Total Checkouts": 852
  },
  {
    Home_Library_Definition: "Chinatown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 2483,
    "Total Checkouts": 4188
  },
  {
    Home_Library_Definition: "Anza",
    Year: 2016,
    Month_number: 6,
    "Age Range": "60 to 64 years",
    "Total Renewals": 45,
    "Total Checkouts": 459
  },
  {
    Home_Library_Definition: "Parkside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 49,
    "Total Checkouts": 884
  },
  {
    Home_Library_Definition: "Presidio",
    Year: 2016,
    Month_number: 5,
    "Age Range": "65 to 74 years",
    "Total Renewals": 21,
    "Total Checkouts": 354
  },
  {
    Home_Library_Definition: "Parkside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 1407,
    "Total Checkouts": 972
  },
  {
    Home_Library_Definition: "Sunset",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 100,
    "Total Checkouts": 395
  },
  {
    Home_Library_Definition: "Park",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 96,
    "Total Checkouts": 775
  },
  {
    Home_Library_Definition: "Sunset",
    Year: 2016,
    Month_number: 6,
    "Age Range": "65 to 74 years",
    "Total Renewals": 184,
    "Total Checkouts": 238
  },
  {
    Home_Library_Definition: "Eureka Valley/Harvey Milk Memorial",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 73,
    "Total Checkouts": 116
  },
  {
    Home_Library_Definition: "Excelsior",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 273,
    "Total Checkouts": 431
  },
  {
    Home_Library_Definition: "Excelsior",
    Year: 2016,
    Month_number: 1,
    "Age Range": "45 to 54 years",
    "Total Renewals": 49,
    "Total Checkouts": 27
  },
  {
    Home_Library_Definition: "Merced",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 54,
    "Total Checkouts": 89
  },
  {
    Home_Library_Definition: "Potrero",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 430,
    "Total Checkouts": 616
  },
  {
    Home_Library_Definition: "Ingleside",
    Year: 2016,
    Month_number: 1,
    "Age Range": "45 to 54 years",
    "Total Renewals": 58,
    "Total Checkouts": 40
  },
  {
    Home_Library_Definition: "Merced",
    Year: 2016,
    Month_number: 4,
    "Age Range": "60 to 64 years",
    "Total Renewals": 3,
    "Total Checkouts": 17
  },
  {
    Home_Library_Definition: "Merced",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 578,
    "Total Checkouts": 503
  },
  {
    Home_Library_Definition: "Mission",
    Year: 2016,
    Month_number: 2,
    "Age Range": "65 to 74 years",
    "Total Renewals": 24,
    "Total Checkouts": 48
  },
  {
    Home_Library_Definition: "Eureka Valley/Harvey Milk Memorial",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 222,
    "Total Checkouts": 468
  },
  {
    Home_Library_Definition: "Portola",
    Year: 2016,
    Month_number: 6,
    "Age Range": "35 to 44 years",
    "Total Renewals": 435,
    "Total Checkouts": 267
  },
  {
    Home_Library_Definition: "Anza",
    Year: 2016,
    Month_number: 2,
    "Age Range": "45 to 54 years",
    "Total Renewals": 965,
    "Total Checkouts": 726
  },
  {
    Home_Library_Definition: "Bernal Heights",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 169,
    "Total Checkouts": 252
  },
  {
    Home_Library_Definition: "Marina",
    Year: 2016,
    Month_number: 6,
    "Age Range": "65 to 74 years",
    "Total Renewals": 95,
    "Total Checkouts": 246
  },
  {
    Home_Library_Definition: "Ingleside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 289,
    "Total Checkouts": 419
  },
  {
    Home_Library_Definition: "Marina",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 184,
    "Total Checkouts": 382
  },
  {
    Home_Library_Definition: "Bayview/Linda Brooks-Burton",
    Year: 2016,
    Month_number: 6,
    "Age Range": "60 to 64 years",
    "Total Renewals": 0,
    "Total Checkouts": 4
  },
  {
    Home_Library_Definition: "Visitacion Valley",
    Year: 2016,
    Month_number: 6,
    "Age Range": "65 to 74 years",
    "Total Renewals": 227,
    "Total Checkouts": 403
  },
  {
    Home_Library_Definition: "Bayview/Linda Brooks-Burton",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 53,
    "Total Checkouts": 810
  },
  {
    Home_Library_Definition: "Ingleside",
    Year: 2016,
    Month_number: 2,
    "Age Range": "60 to 64 years",
    "Total Renewals": 622,
    "Total Checkouts": 698
  },
  {
    Home_Library_Definition: "Excelsior",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 61,
    "Total Checkouts": 366
  },
  {
    Home_Library_Definition: "Parkside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 318,
    "Total Checkouts": 348
  },
  {
    Home_Library_Definition: "Mission",
    Year: 2016,
    Month_number: 6,
    "Age Range": "60 to 64 years",
    "Total Renewals": 491,
    "Total Checkouts": 558
  },
  {
    Home_Library_Definition: "Eureka Valley/Harvey Milk Memorial",
    Year: 2016,
    Month_number: 4,
    "Age Range": "55 to 59 years",
    "Total Renewals": 115,
    "Total Checkouts": 109
  },
  {
    Home_Library_Definition: "North Beach",
    Year: 2016,
    Month_number: 6,
    "Age Range": "45 to 54 years",
    "Total Renewals": 1,
    "Total Checkouts": 79
  },
  {
    Home_Library_Definition: "Excelsior",
    Year: 2016,
    Month_number: 6,
    "Age Range": "35 to 44 years",
    "Total Renewals": 0,
    "Total Checkouts": 2
  },
  {
    Home_Library_Definition: "Portola",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 717,
    "Total Checkouts": 822
  },
  {
    Home_Library_Definition: "North Beach",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 38,
    "Total Checkouts": 231
  },
  {
    Home_Library_Definition: "Presidio",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 400,
    "Total Checkouts": 1299
  },
  {
    Home_Library_Definition: "Merced",
    Year: 2016,
    Month_number: 6,
    "Age Range": "55 to 59 years",
    "Total Renewals": 39,
    "Total Checkouts": 185
  },
  {
    Home_Library_Definition: "Unknown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 0,
    "Total Checkouts": 23
  },
  {
    Home_Library_Definition: "North Beach",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 35,
    "Total Checkouts": 84
  },
  {
    Home_Library_Definition: "Presidio",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 627,
    "Total Checkouts": 687
  },
  {
    Home_Library_Definition: "Park",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 56,
    "Total Checkouts": 145
  },
  {
    Home_Library_Definition: "Mission Bay",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 319,
    "Total Checkouts": 410
  },
  {
    Home_Library_Definition: "Park",
    Year: 2016,
    Month_number: 3,
    "Age Range": "60 to 64 years",
    "Total Renewals": 231,
    "Total Checkouts": 709
  },
  {
    Home_Library_Definition: "Marina",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 71,
    "Total Checkouts": 467
  },
  {
    Home_Library_Definition: "Golden Gate Valley",
    Year: 2016,
    Month_number: 1,
    "Age Range": "60 to 64 years",
    "Total Renewals": 5,
    "Total Checkouts": 70
  },
  {
    Home_Library_Definition: "Presidio",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 41,
    "Total Checkouts": 95
  },
  {
    Home_Library_Definition: "Bernal Heights",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 397,
    "Total Checkouts": 452
  },
  {
    Home_Library_Definition: "Bernal Heights",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 26,
    "Total Checkouts": 179
  },
  {
    Home_Library_Definition: "Park",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 591,
    "Total Checkouts": 1009
  },
  {
    Home_Library_Definition: "Parkside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 112,
    "Total Checkouts": 295
  },
  {
    Home_Library_Definition: "Eureka Valley/Harvey Milk Memorial",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 381,
    "Total Checkouts": 798
  },
  {
    Home_Library_Definition: "Portola",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 148,
    "Total Checkouts": 141
  },
  {
    Home_Library_Definition: "Eureka Valley/Harvey Milk Memorial",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 1420,
    "Total Checkouts": 2568
  },
  {
    Home_Library_Definition: "Library on Wheels",
    Year: 2016,
    Month_number: 3,
    "Age Range": "65 to 74 years",
    "Total Renewals": 1565,
    "Total Checkouts": 3050
  },
  {
    Home_Library_Definition: "Presidio",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 4161,
    "Total Checkouts": 2064
  },
  {
    Home_Library_Definition: "Potrero",
    Year: 2016,
    Month_number: 4,
    "Age Range": "45 to 54 years",
    "Total Renewals": 50,
    "Total Checkouts": 84
  },
  {
    Home_Library_Definition: "Park",
    Year: 2016,
    Month_number: 1,
    "Age Range": "45 to 54 years",
    "Total Renewals": 10,
    "Total Checkouts": 74
  },
  {
    Home_Library_Definition: "Western Addition",
    Year: 2016,
    Month_number: 6,
    "Age Range": "55 to 59 years",
    "Total Renewals": 787,
    "Total Checkouts": 698
  },
  {
    Home_Library_Definition: "Marina",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 104,
    "Total Checkouts": 93
  },
  {
    Home_Library_Definition: "Ingleside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 1,
    "Total Checkouts": 392
  },
  {
    Home_Library_Definition: "Park",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 28,
    "Total Checkouts": 40
  },
  {
    Home_Library_Definition: "Presidio",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 413,
    "Total Checkouts": 1090
  },
  {
    Home_Library_Definition: "Marina",
    Year: 2016,
    Month_number: 6,
    "Age Range": "55 to 59 years",
    "Total Renewals": 133,
    "Total Checkouts": 298
  },
  {
    Home_Library_Definition: "Mission Bay",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 1012,
    "Total Checkouts": 1764
  },
  {
    Home_Library_Definition: "Mission Bay",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 406,
    "Total Checkouts": 317
  },
  {
    Home_Library_Definition: "Golden Gate Valley",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 195,
    "Total Checkouts": 672
  },
  {
    Home_Library_Definition: "Portola",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 637,
    "Total Checkouts": 593
  },
  {
    Home_Library_Definition: "Portola",
    Year: 2016,
    Month_number: 7,
    "Age Range": "20 to 24 years",
    "Total Renewals": 98,
    "Total Checkouts": 103
  },
  {
    Home_Library_Definition: "Potrero",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 8,
    "Total Checkouts": 8
  },
  {
    Home_Library_Definition: "Presidio",
    Year: 2016,
    Month_number: 6,
    "Age Range": "45 to 54 years",
    "Total Renewals": 94,
    "Total Checkouts": 501
  },
  {
    Home_Library_Definition: "Park",
    Year: 2016,
    Month_number: 2,
    "Age Range": "60 to 64 years",
    "Total Renewals": 16,
    "Total Checkouts": 357
  },
  {
    Home_Library_Definition: "Bayview/Linda Brooks-Burton",
    Year: 2016,
    Month_number: 6,
    "Age Range": "45 to 54 years",
    "Total Renewals": 176,
    "Total Checkouts": 295
  },
  {
    Home_Library_Definition: "Western Addition",
    Year: 2016,
    Month_number: 6,
    "Age Range": "65 to 74 years",
    "Total Renewals": 104,
    "Total Checkouts": 45
  },
  {
    Home_Library_Definition: "Mission Bay",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 154,
    "Total Checkouts": 418
  },
  {
    Home_Library_Definition: "Portola",
    Year: 2016,
    Month_number: 1,
    "Age Range": "55 to 59 years",
    "Total Renewals": 1,
    "Total Checkouts": 1
  },
  {
    Home_Library_Definition: "Portola",
    Year: 2016,
    Month_number: 7,
    "Age Range": "20 to 24 years",
    "Total Renewals": 381,
    "Total Checkouts": 285
  },
  {
    Home_Library_Definition: "Western Addition",
    Year: 2016,
    Month_number: 4,
    "Age Range": "45 to 54 years",
    "Total Renewals": 46,
    "Total Checkouts": 373
  },
  {
    Home_Library_Definition: "Park",
    Year: 2016,
    Month_number: 2,
    "Age Range": "35 to 44 years",
    "Total Renewals": 72,
    "Total Checkouts": 125
  },
  {
    Home_Library_Definition: "Ingleside",
    Year: 2016,
    Month_number: 6,
    "Age Range": "20 to 24 years",
    "Total Renewals": 21,
    "Total Checkouts": 57
  },
  {
    Home_Library_Definition: "Golden Gate Valley",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 323,
    "Total Checkouts": 712
  },
  {
    Home_Library_Definition: "Merced",
    Year: 2016,
    Month_number: 6,
    "Age Range": "25 to 34 years",
    "Total Renewals": 7,
    "Total Checkouts": 8
  },
  {
    Home_Library_Definition: "Ocean View",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 32,
    "Total Checkouts": 238
  },
  {
    Home_Library_Definition: "Western Addition",
    Year: 2016,
    Month_number: 6,
    "Age Range": "35 to 44 years",
    "Total Renewals": 0,
    "Total Checkouts": 555
  },
  {
    Home_Library_Definition: "Park",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 217,
    "Total Checkouts": 598
  },
  {
    Home_Library_Definition: "Ocean View",
    Year: 2016,
    Month_number: 7,
    "Age Range": "20 to 24 years",
    "Total Renewals": 28,
    "Total Checkouts": 82
  },
  {
    Home_Library_Definition: "Ingleside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 83,
    "Total Checkouts": 214
  },
  {
    Home_Library_Definition: "Mission Bay",
    Year: 2016,
    Month_number: 5,
    "Age Range": "25 to 34 years",
    "Total Renewals": 2,
    "Total Checkouts": 1
  },
  {
    Home_Library_Definition: "Ingleside",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 398,
    "Total Checkouts": 2267
  },
  {
    Home_Library_Definition: "Western Addition",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 156,
    "Total Checkouts": 132
  },
  {
    Home_Library_Definition: "Western Addition",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 2,
    "Total Checkouts": 12
  },
  {
    Home_Library_Definition: "Ingleside",
    Year: 2016,
    Month_number: 2,
    "Age Range": "25 to 34 years",
    "Total Renewals": 8,
    "Total Checkouts": 5
  },
  {
    Home_Library_Definition: "Bayview/Linda Brooks-Burton",
    Year: 2016,
    Month_number: 6,
    "Age Range": "25 to 34 years",
    "Total Renewals": 2,
    "Total Checkouts": 7
  },
  {
    Home_Library_Definition: "Western Addition",
    Year: 2016,
    Month_number: 5,
    "Age Range": "25 to 34 years",
    "Total Renewals": 23,
    "Total Checkouts": 55
  },
  {
    Home_Library_Definition: "Potrero",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 22,
    "Total Checkouts": 797
  },
  {
    Home_Library_Definition: "North Beach",
    Year: 2016,
    Month_number: 2,
    "Age Range": "45 to 54 years",
    "Total Renewals": 0,
    "Total Checkouts": 5
  },
  {
    Home_Library_Definition: "Mission Bay",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 12,
    "Total Checkouts": 10
  },
  {
    Home_Library_Definition: "Bayview/Linda Brooks-Burton",
    Year: 2016,
    Month_number: 2,
    "Age Range": "35 to 44 years",
    "Total Renewals": 0,
    "Total Checkouts": 6
  },
  {
    Home_Library_Definition: "North Beach",
    Year: 2016,
    Month_number: 2,
    "Age Range": "25 to 34 years",
    "Total Renewals": 0,
    "Total Checkouts": 0
  },
  {
    Home_Library_Definition: "Visitacion Valley",
    Year: 2016,
    Month_number: 4,
    "Age Range": "55 to 59 years",
    "Total Renewals": 29,
    "Total Checkouts": 155
  },
  {
    Home_Library_Definition: "Bayview/Linda Brooks-Burton",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 13,
    "Total Checkouts": 69
  },
  {
    Home_Library_Definition: "Mission Bay",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 1052,
    "Total Checkouts": 772
  },
  {
    Home_Library_Definition: "Potrero",
    Year: 2016,
    Month_number: 6,
    "Age Range": "35 to 44 years",
    "Total Renewals": 0,
    "Total Checkouts": 5
  },
  {
    Home_Library_Definition: "Mission Bay",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 216,
    "Total Checkouts": 273
  },
  {
    Home_Library_Definition: "Western Addition",
    Year: 2016,
    Month_number: 1,
    "Age Range": "25 to 34 years",
    "Total Renewals": 19,
    "Total Checkouts": 12
  },
  {
    Home_Library_Definition: "Bayview/Linda Brooks-Burton",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 81,
    "Total Checkouts": 224
  },
  {
    Home_Library_Definition: "Mission Bay",
    Year: 2016,
    Month_number: 7,
    "Age Range": "25 to 34 years",
    "Total Renewals": 10,
    "Total Checkouts": 9
  },
  {
    Home_Library_Definition: "Golden Gate Valley",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 18,
    "Total Checkouts": 95
  },
  {
    Home_Library_Definition: "Golden Gate Valley",
    Year: 2016,
    Month_number: 3,
    "Age Range": "45 to 54 years",
    "Total Renewals": 79,
    "Total Checkouts": 80
  },
  {
    Home_Library_Definition: "Visitacion Valley",
    Year: 2016,
    Month_number: 6,
    "Age Range": "25 to 34 years",
    "Total Renewals": 0,
    "Total Checkouts": 10
  },
  {
    Home_Library_Definition: "Golden Gate Valley",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 1,
    "Total Checkouts": 146
  },
  {
    Home_Library_Definition: "Golden Gate Valley",
    Year: 2016,
    Month_number: 6,
    "Age Range": "25 to 34 years",
    "Total Renewals": 5,
    "Total Checkouts": 52
  },
  {
    Home_Library_Definition: "Unknown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 121,
    "Total Checkouts": 243
  },
  {
    Home_Library_Definition: "Visitacion Valley",
    Year: 2016,
    Month_number: 1,
    "Age Range": "20 to 24 years",
    "Total Renewals": 27,
    "Total Checkouts": 241
  },
  {
    Home_Library_Definition: "Unknown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 14,
    "Total Checkouts": 180
  },
  {
    Home_Library_Definition: "Ocean View",
    Year: 2016,
    Month_number: 6,
    "Age Range": "25 to 34 years",
    "Total Renewals": 19,
    "Total Checkouts": 31
  },
  {
    Home_Library_Definition: "Visitacion Valley",
    Year: 2016,
    Month_number: 2,
    "Age Range": "60 to 64 years",
    "Total Renewals": 0,
    "Total Checkouts": 141
  },
  {
    Home_Library_Definition: "Golden Gate Valley",
    Year: 2016,
    Month_number: 1,
    "Age Range": "65 to 74 years",
    "Total Renewals": 0,
    "Total Checkouts": 1
  },
  {
    Home_Library_Definition: "Golden Gate Valley",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 197,
    "Total Checkouts": 180
  },
  {
    Home_Library_Definition: "Visitacion Valley",
    Year: 2016,
    Month_number: 4,
    "Age Range": "60 to 64 years",
    "Total Renewals": 41,
    "Total Checkouts": 200
  },
  {
    Home_Library_Definition: "Visitacion Valley",
    Year: 2016,
    Month_number: 4,
    "Age Range": "25 to 34 years",
    "Total Renewals": 0,
    "Total Checkouts": 1
  },
  {
    Home_Library_Definition: "Ocean View",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 1183,
    "Total Checkouts": 1290
  },
  {
    Home_Library_Definition: "Unknown",
    Year: 2016,
    Month_number: 4,
    "Age Range": "45 to 54 years",
    "Total Renewals": 92,
    "Total Checkouts": 139
  },
  {
    Home_Library_Definition: "Visitacion Valley",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 2360,
    "Total Checkouts": 3466
  },
  {
    Home_Library_Definition: "Visitacion Valley",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 18,
    "Total Checkouts": 157
  },
  {
    Home_Library_Definition: "Library on Wheels",
    Year: 2016,
    Month_number: 7,
    "Age Range": "55 to 59 years",
    "Total Renewals": 718,
    "Total Checkouts": 1585
  },
  {
    Home_Library_Definition: "Unknown",
    Year: 2016,
    Month_number: 5,
    "Age Range": "25 to 34 years",
    "Total Renewals": 85,
    "Total Checkouts": 102
  },
  {
    Home_Library_Definition: "Ocean View",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 1,
    "Total Checkouts": 181
  },
  {
    Home_Library_Definition: "Ocean View",
    Year: 2016,
    Month_number: 7,
    "Age Range": "25 to 34 years",
    "Total Renewals": 653,
    "Total Checkouts": 610
  },
  {
    Home_Library_Definition: "Ocean View",
    Year: 2016,
    Month_number: 6,
    "Age Range": "60 to 64 years",
    "Total Renewals": 0,
    "Total Checkouts": 4
  },
  {
    Home_Library_Definition: "Unknown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "45 to 54 years",
    "Total Renewals": 153,
    "Total Checkouts": 236
  },
  {
    Home_Library_Definition: "Ocean View",
    Year: 2016,
    Month_number: 2,
    "Age Range": "25 to 34 years",
    "Total Renewals": 40,
    "Total Checkouts": 154
  },
  {
    Home_Library_Definition: "Children's Bookmobile",
    Year: 2016,
    Month_number: 7,
    "Age Range": "25 to 34 years",
    "Total Renewals": 25,
    "Total Checkouts": 366
  },
  {
    Home_Library_Definition: "Children's Bookmobile",
    Year: 2016,
    Month_number: 4,
    "Age Range": "45 to 54 years",
    "Total Renewals": 4,
    "Total Checkouts": 140
  },
  {
    Home_Library_Definition: "Library on Wheels",
    Year: 2016,
    Month_number: 6,
    "Age Range": "35 to 44 years",
    "Total Renewals": 46,
    "Total Checkouts": 139
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Excelsior)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "25 to 34 years",
    "Total Renewals": 641,
    "Total Checkouts": 510
  },
  {
    Home_Library_Definition: "Unknown",
    Year: 2016,
    Month_number: 6,
    "Age Range": "25 to 34 years",
    "Total Renewals": 28,
    "Total Checkouts": 115
  },
  {
    Home_Library_Definition: "Unknown",
    Year: 2016,
    Month_number: 5,
    "Age Range": "25 to 34 years",
    "Total Renewals": 0,
    "Total Checkouts": 0
  },
  {
    Home_Library_Definition: "Library on Wheels",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 7,
    "Total Checkouts": 196
  },
  {
    Home_Library_Definition: "Unknown",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 301,
    "Total Checkouts": 187
  },
  {
    Home_Library_Definition: "Unknown",
    Year: 2016,
    Month_number: 5,
    "Age Range": "20 to 24 years",
    "Total Renewals": 0,
    "Total Checkouts": 1
  },
  {
    Home_Library_Definition: "Library on Wheels",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 375,
    "Total Checkouts": 1465
  },
  {
    Home_Library_Definition: "Library on Wheels",
    Year: 2016,
    Month_number: 3,
    "Age Range": "35 to 44 years",
    "Total Renewals": 9,
    "Total Checkouts": 57
  },
  {
    Home_Library_Definition: "Library on Wheels",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 345,
    "Total Checkouts": 486
  },
  {
    Home_Library_Definition: "Library on Wheels",
    Year: 2016,
    Month_number: 6,
    "Age Range": "65 to 74 years",
    "Total Renewals": 1,
    "Total Checkouts": 103
  },
  {
    Home_Library_Definition: "Branch Bookmobile (West Portal)",
    Year: 2016,
    Month_number: 5,
    "Age Range": "20 to 24 years",
    "Total Renewals": 111,
    "Total Checkouts": 407
  },
  {
    Home_Library_Definition: "Library on Wheels",
    Year: 2016,
    Month_number: 5,
    "Age Range": "65 to 74 years",
    "Total Renewals": 0,
    "Total Checkouts": 7
  },
  {
    Home_Library_Definition: "Children's Bookmobile",
    Year: 2016,
    Month_number: 1,
    "Age Range": "25 to 34 years",
    "Total Renewals": 104,
    "Total Checkouts": 58
  },
  {
    Home_Library_Definition: "Children's Bookmobile",
    Year: 2016,
    Month_number: 2,
    "Age Range": "35 to 44 years",
    "Total Renewals": 481,
    "Total Checkouts": 499
  },
  {
    Home_Library_Definition: "Children's Bookmobile",
    Year: 2016,
    Month_number: 7,
    "Age Range": "20 to 24 years",
    "Total Renewals": 6,
    "Total Checkouts": 348
  },
  {
    Home_Library_Definition: "Children's Bookmobile",
    Year: 2016,
    Month_number: 7,
    "Age Range": "25 to 34 years",
    "Total Renewals": 0,
    "Total Checkouts": 93
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Sunset)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 177,
    "Total Checkouts": 806
  },
  {
    Home_Library_Definition: "Library on Wheels",
    Year: 2016,
    Month_number: 6,
    "Age Range": "55 to 59 years",
    "Total Renewals": 1,
    "Total Checkouts": 34
  },
  {
    Home_Library_Definition: "Children's Bookmobile",
    Year: 2016,
    Month_number: 5,
    "Age Range": "35 to 44 years",
    "Total Renewals": 38,
    "Total Checkouts": 207
  },
  {
    Home_Library_Definition: "Children's Bookmobile",
    Year: 2016,
    Month_number: 7,
    "Age Range": "20 to 24 years",
    "Total Renewals": 1,
    "Total Checkouts": 13
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Excelsior)",
    Year: 2016,
    Month_number: 6,
    "Age Range": "45 to 54 years",
    "Total Renewals": 26,
    "Total Checkouts": 401
  },
  {
    Home_Library_Definition: "Children's Bookmobile",
    Year: 2016,
    Month_number: 7,
    "Age Range": "25 to 34 years",
    "Total Renewals": 0,
    "Total Checkouts": 41
  },
  {
    Home_Library_Definition: "Branch Bookmobile (West Portal)",
    Year: 2016,
    Month_number: 3,
    "Age Range": "65 to 74 years",
    "Total Renewals": 223,
    "Total Checkouts": 171
  },
  {
    Home_Library_Definition: "Children's Bookmobile",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 895,
    "Total Checkouts": 2513
  },
  {
    Home_Library_Definition: "Branch Bookmobile (West Portal)",
    Year: 2016,
    Month_number: 1,
    "Age Range": "20 to 24 years",
    "Total Renewals": 0,
    "Total Checkouts": 3
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Excelsior)",
    Year: 2016,
    Month_number: 4,
    "Age Range": "25 to 34 years",
    "Total Renewals": 60,
    "Total Checkouts": 294
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Marina)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 80,
    "Total Checkouts": 678
  },
  {
    Home_Library_Definition: "Branch Bookmobile (West Portal)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "20 to 24 years",
    "Total Renewals": 111,
    "Total Checkouts": 451
  },
  {
    Home_Library_Definition: "Branch Bookmobile (West Portal)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 422,
    "Total Checkouts": 987
  },
  {
    Home_Library_Definition: "Branch Bookmobile (West Portal)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "25 to 34 years",
    "Total Renewals": 44,
    "Total Checkouts": 200
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Marina)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "60 to 64 years",
    "Total Renewals": 129,
    "Total Checkouts": 220
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Sunset)",
    Year: 2016,
    Month_number: 1,
    "Age Range": "45 to 54 years",
    "Total Renewals": 125,
    "Total Checkouts": 296
  },
  {
    Home_Library_Definition: "Branch Bookmobile (West Portal)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "35 to 44 years",
    "Total Renewals": 29,
    "Total Checkouts": 51
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Sunset)",
    Year: 2016,
    Month_number: 3,
    "Age Range": "35 to 44 years",
    "Total Renewals": 5,
    "Total Checkouts": 23
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Excelsior)",
    Year: 2016,
    Month_number: 5,
    "Age Range": "45 to 54 years",
    "Total Renewals": 23,
    "Total Checkouts": 310
  },
  {
    Home_Library_Definition: "Branch Bookmobile (West Portal)",
    Year: 2016,
    Month_number: 5,
    "Age Range": "20 to 24 years",
    "Total Renewals": 11,
    "Total Checkouts": 72
  },
  {
    Home_Library_Definition: "Branch Bookmobile (West Portal)",
    Year: 2016,
    Month_number: 1,
    "Age Range": "35 to 44 years",
    "Total Renewals": 0,
    "Total Checkouts": 1
  },
  {
    Home_Library_Definition: "Branch Bookmobile (West Portal)",
    Year: 2016,
    Month_number: 2,
    "Age Range": "25 to 34 years",
    "Total Renewals": 33,
    "Total Checkouts": 35
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Sunset)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "65 to 74 years",
    "Total Renewals": 381,
    "Total Checkouts": 377
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Marina)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "75 years and over",
    "Total Renewals": 37,
    "Total Checkouts": 443
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Excelsior)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "75 years and over",
    "Total Renewals": 56,
    "Total Checkouts": 956
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Sunset)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "10 to 19 years",
    "Total Renewals": 144,
    "Total Checkouts": 603
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Sunset)",
    Year: 2016,
    Month_number: 6,
    "Age Range": "0 to 9 years",
    "Total Renewals": 85,
    "Total Checkouts": 588
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Sunset)",
    Year: 2016,
    Month_number: 7,
    "Age Range": "10 to 19 years",
    "Total Renewals": 25,
    "Total Checkouts": 414
  },
  {
    Home_Library_Definition: "Branch Bookmobile (Sunset)",
    Year: 2016,
    Month_number: 5,
    "Age Range": "10 to 19 years",
    "Total Renewals": 0,
    "Total Checkouts": 190
  }
]

const svg = d3.select("svg")
const svgContainer = d3.select("#container")

const margin = 80
const width = 1000 - 2 * margin
const height = 600 - 2 * margin

const chart = svg
  .append("g")
  .attr("transform", `translate(${margin}, ${margin})`)

const xScale = d3
  .scaleBand()
  .range([0, width])
  .domain(sample.map(s => s.Home_Library_Definition))
  .padding(0.4)

const yScale = d3
  .scaleLinear()
  .range([height, 0])
  .domain([0, 100])

// vertical grid lines
// const makeXLines = () => d3.axisBottom()
//   .scale(xScale)

const makeYLines = () => d3.axisLeft().scale(yScale)

chart
  .append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale))

chart.append("g").call(d3.axisLeft(yScale))

// vertical grid lines
// chart.append('g')
//   .attr('class', 'grid')
//   .attr('transform', `translate(0, ${height})`)
//   .call(makeXLines()
//     .tickSize(-height, 0, 0)
//     .tickFormat('')
//   )

chart
  .append("g")
  .attr("class", "grid")
  .call(
    makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat("")
  )

const barGroups = chart
  .selectAll()
  .data(sample)
  .enter()
  .append("g")

barGroups
  .append("rect")
  .attr("class", "bar")
  .attr("x", g => xScale(g.language))
  .attr("y", g => yScale(g.value))
  .attr("height", g => height - yScale(g.value))
  .attr("width", xScale.bandwidth())
  .on("mouseenter", function(actual, i) {
    d3.selectAll(".value").attr("opacity", 0)

    d3.select(this)
      .transition()
      .duration(300)
      .attr("opacity", 0.6)
      .attr("x", a => xScale(a.language) - 5)
      .attr("width", xScale.bandwidth() + 10)

    const y = yScale(actual.value)

    line = chart
      .append("line")
      .attr("id", "limit")
      .attr("x1", 0)
      .attr("y1", y)
      .attr("x2", width)
      .attr("y2", y)

    barGroups
      .append("text")
      .attr("class", "divergence")
      .attr("x", a => xScale(a.language) + xScale.bandwidth() / 2)
      .attr("y", a => yScale(a.value) + 30)
      .attr("fill", "white")
      .attr("text-anchor", "middle")
      .text((a, idx) => {
        const divergence = (a.value - actual.value).toFixed(1)

        let text = ""
        if (divergence > 0) text += "+"
        text += `${divergence}%`

        return idx !== i ? text : ""
      })
  })
  .on("mouseleave", function() {
    d3.selectAll(".value").attr("opacity", 1)

    d3.select(this)
      .transition()
      .duration(300)
      .attr("opacity", 1)
      .attr("x", a => xScale(a.language))
      .attr("width", xScale.bandwidth())

    chart.selectAll("#limit").remove()
    chart.selectAll(".divergence").remove()
  })

barGroups
  .append("text")
  .attr("class", "value")
  .attr("x", a => xScale(a.language) + xScale.bandwidth() / 2)
  .attr("y", a => yScale(a.value) + 30)
  .attr("text-anchor", "middle")
  .text(a => `${a.value}%`)

svg
  .append("text")
  .attr("class", "label")
  .attr("x", -(height / 2) - margin)
  .attr("y", margin / 2.4)
  .attr("transform", "rotate(-90)")
  .attr("text-anchor", "middle")
  .text("Love meter (%)")

svg
  .append("text")
  .attr("class", "label")
  .attr("x", width / 2 + margin)
  .attr("y", height + margin * 1.7)
  .attr("text-anchor", "middle")
  .text("Languages")

svg
  .append("text")
  .attr("class", "title")
  .attr("x", width / 2 + margin)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .text("Most loved programming languages in 2018")

svg
  .append("text")
  .attr("class", "source")
  .attr("x", width - margin / 2)
  .attr("y", height + margin * 1.7)
  .attr("text-anchor", "start")
  .text("Source: Stack Overflow, 2018")
