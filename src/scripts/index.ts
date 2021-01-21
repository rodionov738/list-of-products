import '../styles/style.scss'
// import delay from './includes/delay.ts'
//
// (async () => {
//     await delay(3000)
//     console.log('Hello world')
// })()

// import '@material/mwc-icon/mwc-icon-font'
import '@material/mwc-top-app-bar'
import '@material/mwc-icon-button'
import '@material/mwc-dialog'
import '@material/mwc-button'
import '@material/mwc-list/mwc-check-list-item.js';
import '@material/mwc-list/mwc-list.js';
import {Dialog} from "@material/mwc-dialog/mwc-dialog";
import {List} from "@material/mwc-list/mwc-list";
import {CheckListItem} from "@material/mwc-list/mwc-check-list-item";

const navbarInfoButton: HTMLButtonElement = document.querySelector('mwc-icon-button#info')
const dialog: Dialog = document.querySelector('mwc-dialog#dialog')
navbarInfoButton.onclick = () => dialog.show()

const lists = document.querySelectorAll<List>('mwc-list')
// const listItems = document.querySelectorAll<CheckListItem>('mwc-check-list-item')
// document.body.addEventListener('request-selected', e => console.log(e))

interface IListItem {
  title: string,
  selected: boolean
}

const listItems: Array<IListItem> = [
  {
    title: 'Несколько апельсинов',
    selected: false
  },
  {
    title: 'Дыня',
    selected: false
  },
  {
    title: 'Ананас',
    selected: false
  },
  {
    title: 'Абрикосы',
    selected: false
  },
  {
    title: 'Поп корн',
    selected: false
  },
  {
    title: 'Финики',
    selected: true
  },
  {
    title: 'Папайя',
    selected: true
  }
]

const renderList = (items: Array<IListItem>): void => {
  const selectedList = document.querySelector<List>('#selected')
  const NonSelectedList = document.querySelector<List>('#not-selected')

  items.forEach(item => {
    if (item.selected) {
      const template: string =
        `<mwc-check-list-item selected>${item.title}</mwc-check-list-item>`
      selectedList.insertAdjacentHTML('afterbegin', template)

      return
    }

    const template: string =
      `<mwc-check-list-item>${item.title}</mwc-check-list-item>`
    NonSelectedList.insertAdjacentHTML('afterbegin', template)
  })
}

renderList(listItems)

document.body.addEventListener('action', (e: CustomEvent) => {
  const { index } = e.detail
  const list = e.target as List
  const items = list.querySelectorAll<CheckListItem>('mwc-check-list-item')
  const current = items[index]
  list.removeChild(current)
  if (current.selected) {
    document.querySelector('#selected').insertBefore(current, document.querySelector('#selected').firstChild)
  } else {
    document.querySelector('#not-selected').insertBefore(current, document.querySelector('#not-selected').firstChild)
  }
})

