import CMS from 'netlify-cms-app'
import Preview from './Preivew'
import previewStyle from './preview.css'
//
console.log('previewStyle', previewStyle)

CMS.init()

CMS.registerPreviewStyle(previewStyle, { raw: true })

console.log('123123')

CMS.registerPreviewTemplate('blog', Preview)
