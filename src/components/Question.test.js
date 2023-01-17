const data = require("../features/_DATA");


describe("_saveQuestion", () => {
  it("will check that the saved question is returned and that all expected fields are filled when properly formatted data is passed to the function.", async () => {
    var result = await data._saveQuestion({
      optionOneText: "one",
      optionTwoText: "two",
      author: "id",
    });
    expect(result.optionOne.text).toMatch("one");
    expect(result.optionTwo.text).toMatch("two");
    expect(result.author).toMatch("id");
  });
  it("will return an error if incorrect values are passed", async () => {
    let question = {
      optionOneText: "work from home",
      optionTwoText: "work from office",
    };
    await expect(data._saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will resolve with true if correct values are passed", async () => {
    var result = await data._saveQuestionAnswer({
      authedUser: "mtsamis",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    });

    expect(result).toBe(true);
  });
  it("will return an error if incorrect values are passed", async () => {
    await expect(
      data._saveQuestionAnswer({
        authedUser: "unkownuser",
        qid: "xj3521d579emvofupex13r",
      })
    ).rejects.toMatch("Please provide authedUser, qid, and answer");
  });
});










