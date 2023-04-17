import Title from "./Title/Title"
import c from './Titles.module.css'

const Titles = () => {
  return (
    <div className={c.content__title}>
      <input type="checkbox" className={c.content__input} />
      <Title title='Client ID' />
      <Title title='Client name' />
      <Title title='TRN/PPSN' />
      <Title title='Year end' tit='tit' arrow='arrow-1' />
      <Title title='ARD' tit='ard' arrow='arrow-2' />
      <Title title='Company nu...' />
      <Title title='Email' tit='tit' arrow='none' />
      <Title title='Phone number' arrow='none' />
      <Title title='Company address' arrow='none' />
      <Title title='Action' img='none' arrow='none' />
    </div>
  )
}

export default Titles