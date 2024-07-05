import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
import {
  DocumentHeadTags,
  documentGetInitialProps,
  DocumentHeadTagsProps,
} from '@mui/material-nextjs/v14-pagesRouter';

Document.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="ko">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
