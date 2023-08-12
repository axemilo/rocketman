import { editIcon, deleteIcon } from '../../images'
import Style from './Payment.module.scss'

export const Payment = () => {
  return (
    <>
      <h2 className={Style.title}>To'lov turlari</h2>
      <table className={Style.table}>
        <tr className={Style['table__header']}>
          <th>Nomi</th>
          <th>Telegram button name</th>
          <th>Link</th>
          <th>Holat</th>
          <th>Tahrirlash</th>
          <th>O’chirish</th>
        </tr>
        <tr className={Style['table__body']}>
          <td>Click</td>
          <td>
            <button className={Style['table__body-btn']}>💳 Click</button>
          </td>
          <td>link</td>
          <td>enabled</td>
          <td>
            <img src={editIcon} alt="edit-icon" />
          </td>
          <td>
            {' '}
            <img src={deleteIcon} alt="delete-icon" />
          </td>
        </tr>
      </table>
    </>
  )
}
