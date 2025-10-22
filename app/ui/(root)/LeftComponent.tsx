import clsx from "clsx"

const LeftComponent = ({ className }: { className: string }) => {
  return (
    <div className={clsx(className, `bg-red-300 rounded-3xl`)}>LeftComponent</div>
  )
}

export default LeftComponent