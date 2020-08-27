import EventHandler from './EventHandler'
import AbstractLinkShareButton from './AbstractLinkShareButton'

export default class ShareButtonFacebook extends AbstractLinkShareButton {
  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className, url)
  }

  createLink(): string {
    return `http://www.facebook.com/sharer.php?u=${this.url}`
  }
}
