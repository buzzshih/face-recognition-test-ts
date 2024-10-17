## 開發流程

### git commit

git commit 有套用 git-cz 格式化 git commit 的工具。

使用 yarn commit or npm run commit 當已經把 push 的檔案已經被加入到 staged 就會跳出 git-cz 的提示視窗產生定好規格的 commit message 。

💡 假如沒有檔案在 staged 就會出現錯誤 `✖  error     No files staged!`

### build (編譯打包)

編譯打包的時候比較嚴格，但凡只有有宣告沒有用到或是不符合他的規定的都會噴錯。
所以只要在要上版到 Vercel 之前，可以先在本地執行 yarn build 檢查一下。

### 啟動專案

- `yarn dev ` 本地開發 .

## 問題處理

### 解構時會出現錯誤 - 不會使用所有未經結構化的項目。

這個錯誤只是提醒開發者，解構的出來的變數並沒有被使用到，只要有使用到就不會報出這個錯誤。

```ts
interface accountType {
  username: string;
  password: string;
}
const [account, setAccount] = useState<accountType>({ username: "test", password: "test123" });

// 當這解構宣告使用 account state 會出現，不會使用所有未經結構化的項目的報錯
const { username, password } = account;
```