import '../styles/PresetEditor.css';
import { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

function PresetEditor(props) {
    let [currentPreset, setCurrentPreset] = useState();
    let [code, setCode] = useState('');

    useEffect(() => {
        setCode(props.preset?.code);
    }, [props.preset]);

    function handleCodeChange(value) {
        if (currentPreset !== props.preset) {
            setCurrentPreset(props.preset);
        }
        else {
            props.onCodeChange?.(value);
        }
    }

    function handleEditorMount(editor, monaco) {
        let lib = [
            'declare const width: number;',
            'declare const height: number;',
            'declare type Color = { r: number, g: number, b: number, a: number };',
            'declare function get(x: number, y: number, copy: number = null): Color;',
            'declare function set(x: number, y: number, color: Partial<Color> = {}, copy: number = null): void;',
            'declare function copyFrame(): number;',
            'declare function apply(copy: number = null): void;'
        ].join('\n\n');

        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ES2019,
            lib: ['es2019'],
            allowNonTsExtensions: true
        });

        monaco.languages.typescript.javascriptDefaults.addExtraLib(lib, 'ts:filename/sandbox.d.ts');
        monaco.editor.createModel(lib, 'typescript', monaco.Uri.parse('ts:filename/sandbox.d.ts'));
    }

    return (
        <Editor
            height="360px"
            language="javascript"
            onMount={handleEditorMount}
            loading="Loading preset editor..."
            options={{
                minimap: { enabled: false }
            }}
            value={code}
            onChange={handleCodeChange}
        />
    );
}

export default PresetEditor;