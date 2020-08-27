import ShareButtonTwitter from './ShareButtonTwitter'
import ShareButtonFacebook from './ShareButtonFacebook'
import ShareButtonLinkedIn from './ShareButtonLinkedIn'
import ShareButtonPrint from './ShareButtonPrint'
import AbstractShareButton from './AbstractShareButton'
import DOMEventHandler from './DOMEventHandler'

const eventHandler = new DOMEventHandler()

const twitter: AbstractShareButton = new ShareButtonTwitter(
  eventHandler,
  '.btn-twitter',
  'https://ogabrielaraujo.com.br'
)
twitter.bind()

const facebook: AbstractShareButton = new ShareButtonFacebook(
  eventHandler,
  '.btn-facebook',
  'https://ogabrielaraujo.com.br'
)
facebook.bind()

const linkedIn: AbstractShareButton = new ShareButtonLinkedIn(
  eventHandler,
  '.btn-linkedin',
  'https://ogabrielaraujo.com.br'
)
linkedIn.bind()

const print: AbstractShareButton = new ShareButtonPrint(
  eventHandler,
  '.btn-print'
)
print.bind()
