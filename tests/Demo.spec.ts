import {test,expect} from "@playwright/test";
import {TestConfig} from "../test.config.ts"

test("demo test", async({page})=>{
  const config=new TestConfig();
    await page.goto(config.URL);
});

test("demo test", async({page})=>{
  const config=new TestConfig();
    await page.goto(config.URL);
});
