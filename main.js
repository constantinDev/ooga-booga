let fs = require                        (   // 0000000000000000
    "fs"                                )   // 0000000000000000
let chalk = require                     (   // 0000        0000
    "chalk"                             )   // 0000        0000
let logo = fs.readFileSync              (   // 0000        0000
    "./logo.txt","utf8"                 )   // 0000        0000
// console.log(logo)                        // 0000        0000
for                                     (   // 0000        0000
    char of logo                        ){  // 0000000000000000
    process.stdout.write                (   // 0000000000000000
        chalk.rgb                       (
            Math.floor                  (   // 0000000000000000
            Math.random                 ()  // 0000000000000000
            *255                        ),  // 0000        0000
            Math.floor                  (   // 0000        0000
            Math.random                 ()  // 0000        0000
            *255                        ),  // 0000        0000
            Math.floor                  (   // 0000        0000
            Math.random                 ()  // 0000        0000
            *255                        ))( // 0000000000000000
                char                    ))  // 0000000000000000
}

setTimeout                              (()=>
                                        {   // 0000000000000000
    let i = 0                           ;   // 0000000000000000
    let stream = fs.createWriteStream   (   // 0000
`./OOGA BOOGA NUM ${Math.floor              // 0000
    (Math.random()*999999)}.txt`            // 0000
                                        )   // 0000     0000000
    setInterval                         (()=>//0000     0000000
                                        {   // 0000        0000
        stream.write                    (   // 0000        0000
            "OOGA BOOGA\n",             ()=>// 0000000000000000
                                        {   // 0000000000000000
            for                         (
                ch of `OOGA BOOGA #${i++    //        00
                } WRITTEN\n`                //       0000
                                        ){  //      000000
                process.stdout.write    (   //     000  000
                    chalk.rgb           (   //    0000000000
                        Math.floor      (   //   000000000000
                        Math.random     ()  //  000        000
                        *255            ),  // 000          000
                        Math.floor      (   //000            000
                        Math.random     ()
                        *255            ),
                        Math.floor      (
                        Math.random     ()
                        *255            ))(
                            ch          ))
                                        }
                                        })
                                        })
                                        },
5000                                    )