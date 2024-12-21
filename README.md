# check the place when `console.error` or `throw new Error` is called.

|  | console.error | throw new Error | 
|:-:|:-:|:-:|
| Client Component | ブラウザのコンソール | ブラウザのコンソール |
| Server Component | Runtime Logs | ブラウザのエラー表示 / Runtime Logs |
| Server Actions | Runtime Logs | ブラウザのコンソール(500) / Runtime Logs |
| Edge | Runtime Logs | ブラウザのコンソール(500) / Runtime Logs |

[img](img)
