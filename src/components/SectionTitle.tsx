interface SectionTitleProps {
    section: string;
  }

function SectionTitle({section}:SectionTitleProps) {

    return (
        <p className="text-[#f6f5ef] text-[90px] font-semibold font-alexandria uppercase">{section}</p>
    )
  }
  
  export default SectionTitle
  