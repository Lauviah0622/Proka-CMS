import type NetlifyCmsApp from 'netlify-cms-app'
import ReactMarkdown from 'react-markdown'

type TPreview = Parameters<typeof NetlifyCmsApp.registerPreviewTemplate>[1]

const Preview: TPreview = ({ entry }) => {
  const body = entry.getIn(['data', 'body'])
  return (
    <article
      className="article"
      style={{
        padding: '20px',
      }}
    >
      <ReactMarkdown>{body}</ReactMarkdown>
    </article>
  )
}

export default Preview
