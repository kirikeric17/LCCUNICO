// All site content that changes often lives here: pastors, team members and gallery images.
// Edit names/roles below; photos are in images/team/.

// Images are hosted on the original Google Site
const IMG = "https://sites.google.com/sitesv-images-rt/";

const galleries = {
  mtpic: [
    "AMxu72vFdfGIo302FIdTQhzl7obNbVL1pXEpdBJ8YQ_1wjmpHGEmPY84qn8Q_Aw71peo73MoDmkQKX5F7gU8xgPlOOeaOgfa06ssq-cule1v6w4WMclUlU9_v15mgeF9cXMZ-6AECdqO20dInGH4zcjkeIQ-Z3QdkWjsPMPosCGoZnAQInWwr5fXZIfKc9A3ygIiTpT94SoHXaPu-GoBBnnNTi1fGsogyirw-JxGJtikab4=w1280",
    "AMxu72tfxf3sfcA9x3mRtDYdJW13rw3WbwtM-TlNe8-BdEA_JJ_x9WaqGj1mcdIU_COc3R-5Yq0CmGnY-4hzpgDOrWQhTWvRzmoeUT7XaDmN1Fr0FDQ__6Z7tZSNjJnbCjQr-Z6cprFeLOumLIS0UcwUHEcvbnchEZqVpm5vAe5_v-Jh3XlcABnlT6CcjE8rSfHW6IUpsBp7ewUwnu1bh4JHLRi7BSEtKtx7_uQ4_9dluOE=w1280",
    "AMxu72vSsjVKDmW_sZCougyFBhbXqM3sw-2ieGyquRMsLalRxcZezwAtM7WpwpeGBIglOgglDKFaKtuLLnyAWE4HAKIz7aL_0vh987-fRwODk-TQDiMJeemKpJhVn2YOMFn9C-At6QZ-6fDBk3krfIVC_OB7TVYwZ6NCHui2b1hTmOGhTHszIN8yU2f8WJO0pcYmCg4uF2qFZYh0ezFQbs_0U9dZtzmnKyC-sMTufTHq=w1280",
    "AMxu72ubPDeHjGPdLQXsiiDhbefh1DnPJ5NP1z3A8cBDDQmf1Kquz3sAxxVxpEf7fXo8fQ0NQfhWcMZaJ58kNjEMti2sm9EhGLJBUUG8J9Gmixd4WBfKNPlfcI6zvfhvJgBTYtS_Vmf6yvC9TsYrSIKnPwyi6USZGz7q7Rh3ZHL8s9p7xL5N8M6gu4UDXGFOXht4nPicO-9khDW-aFyxrPySUVoHxYYromb5GAxpkYevhQo=w1280",
    "AMxu72sSJOf-5bizIOWUpzw1z2LWrUovxNAwevkunsP1UeadhX9Nw1I59yzRCGGBkKHOFhSoLpswv-JAX2z4kYGlCxaw50KAAVe-iQFxvrcCBxKC6Q-U60_zqpDjmQ2GPJqr5gn4p1ceb8XKPgCK8ZXv3-KYpbYeTUx3WWxrzmDvC2ACCr0BLEnFG_WtMQMT7BewU6TqDZWLFNW0xSISwqr9X3WrJh8oWWB60ThAK-1f=w1280",
    "AMxu72sXfvRI6X92urVBM0ey5b6kwgfuvjKQK_J-CnI4DJyxbWYfks2uS6M_tZaIwkJMM6kEAVDU7D-9v2gNp8ECxYiukwz5VCTCkj6tbnNi2NKrdx36JRXvq9aj7OfOCRH8w9G-W_UZ4-d0ThY_wuVhCL8NRwK7H9IUMI-gWZIkvAfs1JlpCvfBFd7a1RYd8F1j3vYjid8XivSyV6HzrbtgylZd5qwXWJLlL6s3mO3I=w1280",
    "AMxu72vJya1p9TqFiWJTaarAKid5WHuVJxKmH1I4oMqWqspPlgJ4WKdx5_SGGK7Z2RYsf7cUO1V9gQ-aJHIZUkG3rM83GllO1SewrLlmZOe57nKGOHJUhhX38xYrvwYLs0onPSiFhrsmVnHdDkWKOlSQ-G4mKJK989jHblvl4FgSxh1GP72Q54k3uDhOyD_Nqr3EKrHDM2p5Mt1qeqrZmCB4oUjeJlvfJJ-YznKPfwjz=w1280",
    "AMxu72s0VRlmiSlSfrzqtbGe3Ge9WKu6W7Uk-hHskmPpiPkuMy94DQ6WdlQPa1hCPnW0Lpnnt7Y8lvE1XX0wbO7QbqwbtovXERuOu0D4faQ-AQ2FXz-Va-4fPB67z_0GvBFkxelS0674akPKtHTn1qHvQbARTAIzpRIkCUOQ_0MS4Jgc6buC2UDBZ4eVhGifPoOpEEuPqcbpjdfJwdXFaf2TdyMlydx2C8qQbVo04YxrAHk=w1280",
    "AMxu72ub2ZyhNWc2OVFE-3vnuQwt1pjIwV0uuAm_hvTYq5VdGG2RtlXb7HGdqxv2D8CjYg1oab-iLK0xdrtfW6ilSkTAQkMmgJokPiraOALzTTfZZm-C-d0uRxs2Fd__lOG5CtpaL_fygRmNhhh_qLZ6q1J6VfLEjuwR0ooFDMwyeTS_XGSFiGaOdZrIteHP9vHypTyPHfjLo0NDraQ1sLMjEG3UmFO8hdiyRHwQOJUd=w1280",
    "AMxu72tI-uR23W_6jW4OiOM4M7uTNp3qg3lD6nuh_FgcsEoXESSx2p94hb_SDg_0-_oXWMLHus1J04DikulPI_dv8vKREKcOIFFvnJBQ_LDLZIUceThH9dR5Wpvfl6fUsuwbtAEilQmZByxF8SHUdfEsAIIOAlK-Yn6CbZuiTz11jW4Y9Jtp3mJ2hz1LMVFznn4eb5-AojZ8dbq1rir8HZ691qCzi0jnZ2ZDNROjN_MnAyU=w1280",
    "AMxu72vF3DsfqnVl-f84tYle2LUOamWUK41j16ga2FYWYoNfgaoOOUIgOdZ1iTGlm0poFL5JL4sLdw1GlhyV9NXV1J-y98aGzU73JvarlI6prvLNP_L47UC2SUI5wPNfYO8gf7JpL3BqYtckSKJBvtm3GThv2svlk-Lb3x2JCbwrTx4K0diOgcVHuCTkvalI2mxfd6MoC1e5xpPOwnQ1LJDBifC6sHU0UCOnTM7rpG9Xie8=w1280",
    "AMxu72tjQNQz6Tc4_ZF7nbCvKqh6-W9ixBHHPaomfRso25Ry2PaFc1lqoZdx5FeYZE9odcrPyT8RLAhf1TT6ld4VIGXeOdysh7r8wCV1t9wlGylMlOdApw8Z7HN_sEY9plExrB0arUJoyaU86zaXuqpxjrVi-1mztRYzRmGkj5QTxNmlveLGZdcFtLtWLwQ3C1g5n5In5CCqrFkYQ9NjmV-g0Ri9tV6uBZubyAeMr7P9=w1280",
    "AMxu72tyjY6NP7xPE58SA1Kz8bTbjCCseQubI7V_ygShxBQ_nylD4cSfNQlrHwR-HLfESNgn4Os3XoUQu0ol_iKR35bMI8L7eSSYgFHU3L6bXFva-lm6XsEH-8MUFI4h6PZBXPgXx_AZfNo9MZ8cIUvBcZCr3HUvoyGj3KsCD0cbk5x4k4Cd-pHrxvrntPCsYfyGeX-voezzKjJriwtt1cF04R0_opcF9-xPHhdcOD9CT9w=w1280",
    "AMxu72tSOV3Ue0EKCXDuYTN571_kEf5c2vBcewg6UBh_wYlnF2bDcm4J8euz0GjTCkec1tWi0pnj_VeolhQCvALMRCGOyG4jxZPLEO1-GtNS7rwK6monMUfkO7s1ItD5T8t0VhT5hhd256zc1JwD4qqW7tbIGkwta4JBHLMs_Ghiw5yIMu0IfGZ6Z0dFjJR7FA0lwlfCbhSCaojqTvdwAHwrZYVbCEkstFGwuNb-UVziGas=w1280",
    "AMxu72uK0-csOyq1_Na2RvsNM1mO7QG-80W_44f4FnaiEMXKX6roTLt61LXpxmvE4DDCF5Snw4PJpZJplLNaWr26_fbWqLuHa-wjxATrYqgdyoMJ16Byuf8pcOqFr-WbF_tDwUZWasRFFJYyZfvoa2absuGTuCF5y-3hQfSPX4ZmV38-yiutZGJ5OM3L43iiDF0ADXjmvE8n5bNB1oyTm_1NENrroLy2V8s3QcvusU_dxZQ=w1280",
    "AMxu72tXmzcrVYtz6URyXs8KaAQr-wazWcpD_hHATF5O7HsmTW7voMuN89lG1SYOT7pnD7th4YBn_3IfOeJPPx1kNtSIKVVLL5WlQVJGPaSKzeIUlkJ0c74DwyUc3_VSne0YV9Mgf7vU7-B7Jfq1nLJbp4VT2984UqVnXGSziJLIDcOeZSmJACsEjy95ELasOAeDaDwaXKx4-Gh5FtqC5ShA5ZqnZTMYKudjUVm0nHYeMjE=w1280",
    "AMxu72u2HS5K4jRFBx0RmNv3eCvxRVC5YNPl_Hqn4_iLisHahXPIcsHYc5EQo2yCGz54tZqa5WNCoYgrwVYDDdOd3Mr4ZLjgPHD8bcoCOX3y_TdLfjZhjrfKCRKe9zbaF8_7M9fkZrlgrZvpygXZA3knJajeasko0MhxvPtrDw42QpYkTXf9tv4_OV2KBjP1YIxnbB8Nh5EVxO4diP2KvnP47ZKdNlVQG8dacJyRodUDqfk=w1280",
    "AMxu72sYjvDEBqxzfpx8iXQ-4Nt9sP-z6b-T3zK1Pn5bD8vsZxiP4CU1tsfvBHgbsX6orHfgbiJWraj1aIovjjtUhKEmMYWFl3O5aX4ruQM3vmSwKwJ93LmBbUEOHkQ0YNp3_Efoge0CSIaOSQ2vzAY7BAQfmOJs98QBkBLFrfe6h43bX-64dE5W7Bbc8zhGFxAyyOa_8syNB-9vdVW1FBH41xziCkvkCR4pb1TOJqP4ACc=w1280",
    "AMxu72sacCvpj8CePa40KLPO48klD5nr_MgSD6PsUIaP73_Qf70pky_q0DDvsUoeFocGCmFcRR7OstbfBb-As8h2CXe0QV3zAHhyP4qMER8bmZHcuEee38cDIqvdcq95EKxtsFY8Acn3pAotXI9E80-ScYqQrUUX3-fqTwWD8_rEmmxOo0SRPlj6cpSOpoJg4XaI7h0x-8nEWHjj6eG_w4kw8FMdOQhFIKMn1ih_vWlI=w1280",
    "AMxu72tdhcdWECzgQ1b4tj4DyDzTq4Yg9rw1cOLqYNmkiZsuB7IveKT_xkzSo_8g_y0dkv5XGcHPgF5U9vZsHRmfdBDQ8HY1zyJXhZ_PjTM5pj6_Iu8iK_PgZ7nzp5x3Z1f5BtZCuSs9WpU__rxE61QiZMcaAha0KxZDQk80ewYclVILx1fIFByDc23FurlV9GPqeejaczeZzHDXkewSMoa5SDRX_Ys3XmebRWEP0EmcEOk=w1280",
    "AMxu72sYnSe98YAEXbodJXTQdD5_Qn_UYNvq5IZzi-86p8W_8xU-iah7bIsR81E9DLoppMr0rIoP0Rl-q3X0zFSmYP_B3d1VTcW2-Q5OoSk3OdHjO4ZYSUwYdX5_lAhEHy6hgtNwBGbFeDPo8xO0y-dZBKS6MU3WEc4pfQGIy_ItBweBoGaeooGaDLIFlagBB3_0_6vOVVNH1KS4Gk3X6XwWqsmZXEBqkqFaKWQFWMshEU8=w1280",
    "AMxu72sUphCzO751pzbp2XwF9Sv4vfpby1O960eZ69Li-vWr9qzgbJE6XveKOW974XfzGe7p8u0PxAK1ckwopji_AyU_jJlUIWM6Esp9nzt2AclbGOTa_76XCSOqj--oSdjwkNekWZ8LuD8iXISh-jkbuY03tg05VpnwKxhJecV_RVLDo63U10NWl9f2KWcN4uZ0FLpraE181btX2Jcb5shDfM4WLYbDuwMPBCD8_eYR=w1280"
  ]
};

// Team photos live in images/team/
const TEAM = "images/team/";

const pastors = [
  { name: "Reverend Jastin Balinu", role: "Senior Pastor", img: "jastin.png", featured: true },
  { name: "Pastor Josewa Danur", role: "Youth Pastor", img: "josewa.png" },
  { name: "Pastor Jupili Panchai", role: "Executive Pastor", img: "jupili.png" }
];

const team = {
  coordinators: [
    { name: "Cassandra Ruran", role: "Lead Coordinator", img: "cassandra.png" },
    { name: "Leron Yambau", role: "Assistant Coordinator", img: "leron.png" }
  ],
  mtme: [
    { name: "Serline Imu", role: "Secretary", img: "serline.png" },
    { name: "Olivia La'ing", role: "Assistant Secretary", img: "olivia.png" },
    { name: "Veiavira", role: "Treasurer", img: "veiavira.png" },
    { name: "Annathasia", role: "Assistant Treasurer", img: "annathasia.png" }
  ],
  division: [
    { name: "Cathrina Peter", role: "Media Division", img: "cathrina.png" },
    { name: "Terrance", role: "Logistic Division", img: "terrance.png" },
    { name: "Azreena", role: "Welfare & Entrepreneurship Division", img: "azreena.png" },
    { name: "Deborah", role: "Kainonia Division", img: "deborah.png" },
    { name: "Gloria Hana", role: "Intercessor Division", img: "gloria.png" }
  ],
  pic: [
    { name: "Gllary", role: "Politeknik", img: "gllary.png" },
    { name: "Dexter", role: "IKM", img: "dexter.png" },
    { name: "Eunice", role: "Cyberjaya", img: "eunice.png" },
    { name: "Annathasia", role: "UMS", img: "annathasia.png" },
    { name: "Wasnih", role: "UiTM", img: "wasnih.png" },
    { name: "Elenia", role: "City-Uni / MAHSA / UNITAR", img: "elenia.png" },
    { name: "Olivia La'ing", role: "NBUC", img: "olivia.png" }
  ]
};

