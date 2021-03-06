const mockGetQueueUrl = jest.fn();
jest.mock("@aws-sdk/client-sqs/commands/GetQueueUrlCommand", () => ({
  SQS: function SQS() {
    this.GetQueueUrlCommand = mockGetQueueUrl;
  },
}));
const { run } = require("../../sqs/src/sqs_getqueueurl.js");

test("has to mock SQS#getqueueurl", async (done) => {
  await run();
  expect(mockGetQueueUrl).toHaveBeenCalled;
  done();
});
