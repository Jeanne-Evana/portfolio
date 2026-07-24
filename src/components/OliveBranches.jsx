export default function OliveBranches() {
  return (
    <>
      <img
        src={`${import.meta.env.BASE_URL}olive-top.svg`}
        alt=""
        aria-hidden
        className="olive-branch olive-top"
      />

      <img
        src={`${import.meta.env.BASE_URL}olive-bottom.svg`}
        alt=""
        aria-hidden
        className="olive-branch olive-bottom"
      />
    </>
  )
}