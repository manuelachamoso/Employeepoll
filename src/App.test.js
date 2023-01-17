const data = require("./features/_DATA");

describe("_saveQuestion", () => {
  it("will return the saved question if question is saved", async () => {
    var result = await data._saveQuestion({
      optionOneText: "one",
      optionTwoText: "two",
      author: "id",
    });
    expect(result.optionOne.text).toMatch("one");
    expect(result.optionTwo.text).toMatch("two");
    expect(result.author).toMatch("id");
  });
  it("will return an error if the question is not saved", async () => {
    var badQuestion = {
      optionOneText: "one",
      author: "id",
    };
    await expect(data._saveQuestion(badQuestion)).rejects.toMatch(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will return true if the answer is saved", async () => {
    var result = await data._saveQuestionAnswer({
      authedUser: "zoshikanlu",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    });

    expect(result).toBe(true);
  });
  it("will return an error if the question answer is not saved", async () => {
    await expect(
      data._saveQuestionAnswer({
        authedUser: "notauser",
        qid: "questiondoesnotexist",
      })
    ).rejects.toMatch("Please provide authedUser, qid, and answer");
  });
});








