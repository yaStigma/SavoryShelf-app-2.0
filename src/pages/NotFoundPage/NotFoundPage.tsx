import CSS from "./NotFoundPage.module.css"
export default function NotFoundPage() {
    return (
        <div className={CSS.wrapper}>
          <h2 className={CSS.title}>Oops, something went wrong</h2>
          <p className={CSS.text}>Please return to the recipe selection</p>
        </ div>
      );
};
