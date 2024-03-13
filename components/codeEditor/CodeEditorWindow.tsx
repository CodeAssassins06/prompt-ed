import React, { useState } from 'react'
import Editor from "@monaco-editor/react";

function CodeEditorWindow({ onChange, language, code, theme }: any) {
    const [value, setValue] = useState(code || "");
    const handleEditorChange = (value: any) => {
        setValue(value);
        onChange("code", value);
    };
    return (
        <div className="overlay size-full overflow-hidden rounded-md shadow-2xl">
            <Editor
                height="85vh"
                width={`100%`}
                language={language || "javascript"}
                value={value}
                theme={theme}
                defaultValue="// some comment"
                onChange={handleEditorChange}
            />
        </div>
    )
}

export default CodeEditorWindow