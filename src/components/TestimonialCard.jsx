import React from "react";

function TestimonialCard({testimonial, className}) {
  return (
    <div className={`flex items-center justify-center shadow-xl ${className ? className : ""}`}>
      <div className="flex bg-[#6D8C54] rounded-lg p-4 items-center w-full justify-center space-x-10">
        <div>
          <img
            src={testimonial.image}
            className="w-[200px] h-[200px] rounded-full"
            alt="testimonial"
          />
        </div>
        <div className="text-white w-[50%] flex flex-col space-y-5">
          <div>
            <p className="text-sm">" {testimonial.text} "</p>
          </div>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-300">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;