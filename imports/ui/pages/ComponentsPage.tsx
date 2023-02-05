import React from "react";

import Button from "../components/button/Button";
import Card from "../components/containers/Card";
import Icon from "../components/icon/Icon";
import Checkbox from "../components/input/Checkbox";
import DropDown, { DropDownOptionType } from "../components/input/DropDown";
import Markdown from "../components/input/Markdown";
import RadioButton from "../components/input/RadioButton";
import TextInput from "../components/input/TextInput";
import Modal from "../components/modal/Modal";
import Tag from "../components/button/Tag";
import H1 from "../components/typography/H1";
import H2 from "../components/typography/H2";
import H3 from "../components/typography/H3";
import H4 from "../components/typography/H4";
import H5 from "../components/typography/H5";
import P from "../components/typography/P";
import SmallText from "../components/typography/SmallText";
import useToggle from "../../hooks/useToggle";

function ComponentsPage() {
  const [showModal, toggleShowModal] = useToggle(false);

  const DropDownOptions: DropDownOptionType[] = [
    { id: 0, option: "Canada", icon: "home" },
    { id: 1, option: "United States" },
  ];

  const exampleContent = `## Hello there
### Subtitle
This is a __post__ in *bold*

-------
You can add whatever you want in \`markdown\`, as well as lists:
- Item 1
- Item 2

And you can have [Links](links "link")
`;

  function renderModal() {
    return (
      <Modal
        show={showModal}
        confirmText="Confirm"
        dismissText="Back"
        OnConfirm={() => toggleShowModal(false)}
        onDismiss={() => toggleShowModal(false)}
        title="Confirm action"
      >
        Lorem ipsum dolor sit amet.
      </Modal>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-6 p-10 py-10 overflow-x-scroll lg:grid-cols-2 lg:px-12 xl:px-36">
      <Card title="Typography">
        <H1>Heading H1</H1>
        <H2>Heading H2</H2>
        <H3>Heading H3</H3>
        <H4>Heading H4</H4>
        <H5>Heading H5</H5>
        <P>Test out the different features of our platform!</P>
        <SmallText>This is subtext</SmallText>
      </Card>
      <Card title="Tags" className="w-auto">
        <Tag>Information</Tag>
        <Tag onClick={() => alert("Done")}>
          <Icon icon="close" outline />
          Filter
        </Tag>
      </Card>
      <Card title="Inputs">
        <TextInput />
        <DropDown
          options={DropDownOptions}
          label="Choose country"
          icon="location"
          isEdited
        />
        <RadioButton id="1" checked={true} />
        <Checkbox checked={true} />
      </Card>
      <Card title="Buttons">
        <P>Primary and secondary buttons</P>
        <div className="flex gap-2 mt-4 mb-2">
          <Button style="secondary">Sign up</Button>
          <Button>Log in</Button>
        </div>
        <P>Disabled buttons</P>
        <div className="flex gap-2 mt-4 mb-2">
          <Button disabled style="secondary">
            Sign up
          </Button>
          <Button disabled>Log in</Button>
        </div>
        <P>Ternary button</P>
        <Button style="ternary">
          Forgot password <Icon icon="chevron-right" />
        </Button>
      </Card>
      <Card title="Modal">
        <P className="max-w-sm">
          Modals can be used when all attention needs to be routed to a specific
          action.
        </P>
        {renderModal()}
        <Button onClick={() => toggleShowModal(true)}>Toggle Modal</Button>
      </Card>
      <Card title="Markdown">
        <Markdown content={exampleContent} />
      </Card>
    </div>
  );
}

export default ComponentsPage;
