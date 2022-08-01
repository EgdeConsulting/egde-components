import React, { ReactElement } from 'react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
// eslint-disable-next-line
import 'froala-editor/js/plugins.pkgd.min.js';
// eslint-disable-next-line
import 'froala-editor/js/languages/nb.js';
import FroalaEditor from 'react-froala-wysiwyg';
import { RichTextAreaProps } from 'Types';
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
        /* if (toolbarOptions.strikeThrough) {
            customToolbarButtons.push('strikeThrough');
        }
        if (toolbarOptions.subscript) {
            customToolbarButtons.push('subscript');
        }
        if (toolbarOptions.fontFamily) {
            customToolbarButtons.push('fontFamily');
        }
        if (toolbarOptions.fontSize) {
            customToolbarButtons.push('fontSize');
        }
        if (toolbarOptions.textColor) {
            customToolbarButtons.push('textColor');
        }
        if (toolbarOptions.backgroundColor) {
            customToolbarButtons.push('backgroundColor');
        }
        if (toolbarOptions.inlineClass) {
            customToolbarButtons.push('inlineClass');
        }
        if (toolbarOptions.inlineStyle) {
            customToolbarButtons.push('inlineStyle');
        }
        if (toolbarOptions.clearFormatting) {
            customToolbarButtons.push('clearFormatting');
        }
        if (toolbarOptions.alignLeft) {
            customToolbarButtons.push('alignLeft');
        }
        if (toolbarOptions.alignCenter) {
            customToolbarButtons.push('alignCenter');
        }
        if (toolbarOptions.alignRight) {
            customToolbarButtons.push('alignRight');
        }
        if (toolbarOptions.alignJustify) {
            customToolbarButtons.push('alignJustify');
        }
        if (toolbarOptions.formatOLSimple) {
            customToolbarButtons.push('formatOLSimple');
        }
        if (toolbarOptions.formatOL) {
            customToolbarButtons.push('formatOL');
        }
        if (toolbarOptions.formatUL) {
            customToolbarButtons.push('formatUL');
        }
        if (toolbarOptions.paragraphFormat) {
            customToolbarButtons.push('paragraphFormat');
        }
        if (toolbarOptions.paragraphStyle) {
            customToolbarButtons.push('paragraphStyle');
        }
        if (toolbarOptions.lineHeight) {
            customToolbarButtons.push('lineHeight');
        }
        if (toolbarOptions.outdent) {
            customToolbarButtons.push('outdent');
        }
        if (toolbarOptions.indent) {
            customToolbarButtons.push('indent');
        }
        if (toolbarOptions.quote) {
            customToolbarButtons.push('quote');
        }
        if (toolbarOptions.insertLink) {
            customToolbarButtons.push('insertLink');
        }
        if (toolbarOptions.insertImage) {
            customToolbarButtons.push('insertImage');
        }
        if (toolbarOptions.insertVideo) {
            customToolbarButtons.push('insertVideo');
        }
        if (toolbarOptions.insertTable) {
            customToolbarButtons.push('insertTable');
        }
        if (toolbarOptions.emoticons) {
            customToolbarButtons.push('emoticons');
        }
        if (toolbarOptions.fontAwesome) {
            customToolbarButtons.push('fontAwesome');
        }
        if (toolbarOptions.specialCharacters) {
            customToolbarButtons.push('specialCharacters');
        }
        if (toolbarOptions.embedly) {
            customToolbarButtons.push('embedly');
        }
        if (toolbarOptions.insertFile) {
            customToolbarButtons.push('insertFile');
        }
        if (toolbarOptions.insertHR) {
            customToolbarButtons.push('insertHR');
        }
        if (toolbarOptions.undo) {
            customToolbarButtons.push('undo');
        }
        if (toolbarOptions.redo) {
            customToolbarButtons.push('redo');
        }
        if (toolbarOptions.fullscreen) {
            customToolbarButtons.push('fullscreen');
        }
        if (toolbarOptions.print) {
            customToolbarButtons.push('print');
        }
        if (toolbarOptions.getPDF) {
            customToolbarButtons.push('getPDF');
        }
        if (toolbarOptions.spellChecker) {
            customToolbarButtons.push('spellChecker');
        }
        if (toolbarOptions.selectAll) {
            customToolbarButtons.push('selectAll');
        }
        if (toolbarOptions.html) {
            customToolbarButtons.push('html');
        }
        if (toolbarOptions.help) {
            customToolbarButtons.push('help');
        } */
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

