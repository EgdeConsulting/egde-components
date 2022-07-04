import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertDialog } from './AlertDialog';
import { LibPath } from 'Types';
import { Button } from '@chakra-ui/react';

export default {
  title: LibPath.Overlay + 'AlertDialog' || 'undefined',
  component: AlertDialog,
  argTypes: {
    iconVariant: { defaultValue: 'warning' },
    heading: { defaultValue: 'Heading' },
    text: { defaultValue: 'Alert Dialog Text' },
    isOpen: { defaultValue: true },
    cancelRef: { defaultValue: React.createRef() },
    onClose: { action: 'onClose' },
    buttons: { defaultValue: [{ label: 'OK', onClick: () => {}, variant: 'primary' }] },
  },
} as ComponentMeta<typeof AlertDialog>;

//const Template: ComponentStory<typeof AlertDialog> = (args) => <AlertDialog {...args} />;



const Template: ComponentStory<typeof AlertDialog> = (args) => {
	const[isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);
	const buttons = [{ label: 'OK', onClick: () => {
		setIsOpen(false);
	}, variant: 'primary' }];
	return (
		<div>
			<Button onClick={ () => setIsOpen(true) }>Open Alert Dialog</Button>
			<AlertDialog {...args} onClose={handleClose} isOpen={isOpen} buttons={buttons} />
		</div>
	);

	};

	export const AlertDialogTest = Template.bind({});
