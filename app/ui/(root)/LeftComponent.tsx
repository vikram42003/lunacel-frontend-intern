import clsx from "clsx"

const LeftComponent = ({ className }: { className: string }) => {
  return (
    <div className={clsx(className, `bg-left-component-gray rounded-2xl`)}>LeftComponent</div>
  )
}

export default LeftComponent