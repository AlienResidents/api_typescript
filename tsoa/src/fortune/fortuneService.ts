// src/users/fortuneService.ts
import { Fortune } from "./fortune";
//const { exec } = require("child_process");

export class FortuneService {
  public get(resp: string): Fortune {
    return {
      resp
    };
  }

  public exec("/usr/games/fortune -o", (error: any, stdout: string, stderr: string): Fortune {
    if (error) {
      console.log(`error: ${error.message}`);
      return {
        resp: error.message,
      }
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return {
        resp: stderr,
      }
    }
    console.log(`stdout: ${stdout}`);
    return {
      resp: stdout,
    };
  });
}
