@echo off
setlocal enabledelayedexpansion
set "id=0"

REM UTF-8を使用するように設定します
chcp 65001 >nul

REM 出力ファイルをクリア
echo. > output.js

echo export const images = [ >> output.js

REM jpgファイルをループ処理
for /R %%i in (*.jpg) do (
    REM ファイルパスからカテゴリを抽出（ここではファイル名をそのまま使用）
    set "url=%%~i"
    set "url=!url:%cd%\=!"
    set "url=!url:\=/!"
    set "mainCategory=Category0"
    set "subCategory=SubCategory0"

    REM 出力ファイルに書き込み
    echo { id: !id!, url: '!url!', mainCategory: '!mainCategory!', subCategory: '!subCategory!' }, >> output.js

    REM IDをインクリメント
    set /a id+=1
)

echo ] >> output.js

endlocal