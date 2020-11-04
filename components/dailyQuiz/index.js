import { Form, Input, Button, Modal } from "antd";

function onQuizFinish() {
  Modal.success({
    content: "Congratulations!",
  });
}

const Quiz = (props) => {
  const { wordList } = props;
  return (
    <Form
      layout="vertical"
      className="quiz-form"
      validateTrigger={["onBlur", "onSubmit"]}
      onFinish={onQuizFinish}
    >
      {wordList.map((word, index) => {
        const { zh, en } = word;
        return (
          <Form.Item
            key={index}
            label={`${index + 1}. ${zh}`}
            name={zh}
            rules={[
              {
                validator: (rule, value) => {
                  if (value === en) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("wrong answer");
                  }
                },
              },
            ]}
          >
            <Input />
          </Form.Item>
        );
      })}
      <Form.Item>
        <Button type="primary" htmlType="submit" className="submit-button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Quiz;
