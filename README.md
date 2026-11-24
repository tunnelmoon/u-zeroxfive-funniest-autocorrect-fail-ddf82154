[![make.fun](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/tunnelmoon/u-zeroxfive-funniest-autocorrect-fail-ddf82154/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/tunnelmoon/u-zeroxfive-funniest-autocorrect-fail-ddf82154/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

# Funniest Autocorrect Fail

Entry for the [Funniest Autocorrect Fail](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154) bounty on make.fun.

One line, under 200 characters, that reads as a hilarious autocorrect fail: a condolence text where one letter turns "loss" into "boss".

## Entry

> I'm so sorry for your boss

## How it works

`main.ts` (Node 22, standard library only) validates the entry against the competition gate (1 to 199 characters, a single line, not only whitespace) and writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, then reads the file back to confirm it holds exactly the entry, byte for byte.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
