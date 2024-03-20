import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"


const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1}
}

type Props = {
    title: string,
    description: string,
    icon: JSX.Element,
    setSelectedPage: (val: SelectedPage) => void,
    key: string,
}

const Benefit = ({
    title,
    description,
    icon,
    setSelectedPage,
    key,
}: Props) => {
  return (
    <motion.div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16"
    variants={childVariant}
    >
        <div className="flex justify-center flex-col text-center">
            <div className="mb-4 rounded-full border-2 border-gray-100 bg-primary-100 p-4 mx-auto">
                {icon}
            </div>

            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{description}</p>
        

            <AnchorLink
                className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
            >
                <p>Learn More</p>
            </AnchorLink>
        </div>
        
    </motion.div>
  )
}

export default Benefit