const FilterGroup = ({ title, inputType, options }) => {
    return (  
        <div className="mb-4">
            <h4 className="text-gray-2 text-[14px] mb-2">{title}</h4>
            {options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                    <input type={inputType} name={title} id={option.value || option.text} className="w-[22px] h-[22px] mr-2" />
                    <label htmlFor={option.value || option.text} className="text-dark-gray-2">
                        {option.text}
                    </label>
                </div>
            ))}
        </div>
    );
};
 
export default FilterGroup;