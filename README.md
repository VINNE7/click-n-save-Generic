This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

### About the Project

This is the foundational code I developed to create a tool aimed at assisting DeMolay Brazil's NRC evaluators. They approached me with a request to automate certain straightforward processes, ultimately speeding up the evaluation procedures. While I'm not officially part of the DeMolay Brazil development team, they needed my help, and I chose to create a browser extension due to its accessibility.

The project accomplishes three primary tasks. First, it injects a user-friendly UI button into the webpage, enabling evaluators to download an exam as a text file. Additionally, it inserts a copy content button, allowing evaluators to swiftly copy their answers. For the sake of curiosity and learning, I also incorporated Chrome's contextMenu API to enable the download of selected text as a text file. This serves as an alternative feature, despite the presence of a more user-friendly button.

The extension operates with minimal permissions, and both the base code and the current version are accessible to evaluators for auditing purposes. DeMolay Brazil's authorities can also review the code. Importantly, the extension ensures data privacy, does not leak sensitive information, and relies on the webpage's user authentication to access webpage content.

### My next steps

During the development process, while discussing the requirements with the evaluator who approached me, I learned that they utilize cloud storage to store exams. This choice is driven by the need to run a plagiarism checking process, ensuring that individuals undergoing evaluation do not engage in cheating. To enhance the functionality of the extension, my next goal is to delve into the cloud service API. This exploration will enable me to implement a button that seamlessly uploads exams to the cloud.

Looking ahead, my future plan involves integrating a plagiarism checking service based on local databases. This approach will allow me to develop an API that automates the entire process. Subsequently, I aim to create an extension that mirrors the functionality of the current one—injecting user-friendly UI components onto exam pages.

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.
