# AON-UI-NG

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)

本專案為 [AON](https://github.com/RemakeAONTeam/AON) 的 UI 開發，先前專案為 使用 React.js 開發的 [AON-UI](https://github.com/RemakeAONTeam/AON-UI)，由於使用 TypeScript 有助於型別上的定義，因此本團隊決定重構。  

## Installation

```bash
git clone https://github.com/RemakeAONTeam/AON-UI-NG.git
```

```bash
yarn
```

## Usage

本地環境啟動 [http://localhost:4200](http://localhost:4200).

```bash
yarn start
```

## Build

```bash
yarn build
```

## Design Pattern

- 請勿使用 `button`
- 所有圖片請使用 `backgroundImage`, 避免有拖曳問題

## License

AON-UI is BSD licensed. See [LICENSE](https://github.com/RemakeAONTeam/AON-UI/blob/master/LICENSE).

## Join Us

<a href="https://www.patreon.com/nobu_game/posts">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Contributing

本專案使用 Angular 框架，非常歡迎任何貢獻，如果您對該遊戲有興趣，也歡迎加入我們。

### Stylelint

本專案語法風格依循 `stylelint`， 請在您 PR 之前，安裝以下相關套件，並且通過語法檢測 😇。

- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
- [vscode-stylefmt](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-stylefmt)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

```bash
yarn lint
```
