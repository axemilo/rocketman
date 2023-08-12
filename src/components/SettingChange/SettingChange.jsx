import Style from './SettingChange.module.scss'

export const SettingChange = () => {
  return (
    <>
      <h1 className={Style.title}>Change client info</h1>
      <form className={Style.form} action="">
        <div className={Style.item}>
          <label className={Style.label} htmlFor="companyName">
            Nomi
          </label>
          <input
            className={Style.input}
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Kompaniya nomi"
          />
        </div>
        <div className={Style.item}>
          <label className={Style.label} htmlFor="mediaLink">
            Media Link
          </label>
          <input
            className={Style.input}
            id="mediaLink"
            type="url"
            placeholder="Media uchun link kiriting"
          />
        </div>
        <div className={Style.item}>
          <label className={Style.label} htmlFor="deliveryPlace">
            Yetkazib berish narxi
          </label>
          <input
            className={Style.input}
            id="deliveryPlace"
            type="text"
            placeholder="masalan: 10 000 so’m"
          />
        </div>
        <div className={Style.item}>
          <label className={Style.label} htmlFor="catalogLink">
            Katalog link
          </label>
          <input
            className={Style.input}
            id="catalogLink"
            type="url"
            placeholder="Katalog uchun link kiriting"
          />
        </div>
        <div className={Style.item}>
          <label className={Style.label} htmlFor="numberPhone">
            Telefon raqam
          </label>
          <input
            className={Style.input}
            id="numberPhone"
            type="phone"
            placeholder="+998 _ _  _ _ _  _ _  _ _"
          />
        </div>
        <button className={Style.btn} type="submit">
          Yangilash
        </button>
      </form>
    </>
  )
}
