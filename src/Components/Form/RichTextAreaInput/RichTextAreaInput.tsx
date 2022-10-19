import React, { ReactElement } from 'react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
// eslint-disable-next-line
import 'froala-editor/js/plugins.pkgd.min.js';
// eslint-disable-next-line
import 'froala-editor/js/languages/nb.js';
import FroalaEditor from 'react-froala-wysiwyg';
import { RichTextAreaProps } from 'SharedTypes';
import { BaseInput } from 'Components';

// eslint-disable-next-line complexity
export const RichTextAreaInput = (props: RichTextAreaProps): ReactElement => {
    const {
        label,
        labelTextMargin,
        placeholder,
        onChange,
        value,
        invalidText,
        captionText,
        margin,
        padding,
        width,
        minWidth,
        toolbarOptions,
        characterLimit,
    } = props;

    const defaultToolbarButtons: string[] = [
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'fontFamily',
        'fontSize',
        'textColor',
        'backgroundColor',
        'inlineClass',
        'inlineStyle',
        'clearFormatting',
        'alignLeft',
        'alignCenter',
        'alignRight',
        'alignJustify',
        'formatOLSimple',
        'formatOL',
        'formatUL',
        'paragraphFormat',
        'paragraphStyle',
        'lineHeight',
        'outdent',
        'indent',
        'quote',
        'insertLink',
        'insertImage',
        'insertVideo',
        'insertTable',
        'emoticons',
        'fontAwesome',
        'specialCharacters',
        'embedly',
        'insertFile',
        'insertHR',
        'undo',
        'redo',
        'fullscreen',
        'print',
        'getPDF',
        'spellChecker',
        'selectAll',
        'html',
        'help',
    ];

    const customToolbarButtons: string[] = [];
    if (toolbarOptions) {
        Object.entries(toolbarOptions).forEach(([toolbarOption, value]) => {
            if (value) {
                customToolbarButtons.push(toolbarOption);
            }
        });
        /*
        if (toolbarOptions.bold) {
            customToolbarButtons.push('bold');
        }
        if (toolbarOptions.italic) {
            customToolbarButtons.push('italic');
        }
        if (toolbarOptions.underline) {
            customToolbarButtons.push('underline');
        }
        if (toolbarOptions.unorderedList) {
            customToolbarButtons.push('formatUL');
        }
        */
    }
    const config = {
        placeholderText: placeholder,
        attribution: false,
        language: 'nb',
        quickInsertEnabled: false,
        charCounterMax: characterLimit,
        width: width,
        toolbarButtons: toolbarOptions
            ? customToolbarButtons
            : defaultToolbarButtons,
    };
    return (
        <BaseInput
            label={label}
            labelTextMargin={labelTextMargin}
            invalidText={invalidText}
            captionText={captionText}
            margin={margin}
            padding={padding}
            width={width}
            minWidth={minWidth}
        >
            <FroalaEditor
                config={config}
                model={value}
                onModelChange={onChange}
            />
        </BaseInput>
    );
};
