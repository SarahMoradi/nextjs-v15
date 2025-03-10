/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useImperativeHandle, useRef } from "react";
import { AuthInputProps } from "./auth-code.types";
import classNames from "classnames";

const AuthCode = ({
  variant = "ghost",
  autoFocus = true,
  className,
  length = 5,
  onChange,
  ref,
}) => {
  if (length < 1) {
    throw new Error("تعداد ارقام باید بزرگتر از صفر باشد");
  }

  const inputsRef = useRef<Array<HTMLInputElement>>([]);

  const inputProps: AuthInputProps = {
    min: "0",
    max: "9",
    pattern: "[0-9]{1}",
  };

  const sendResult = () => {
    const result = inputsRef.current.map((input) => input.value).join("");
    onChange(result);
  };

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("on change");
    const {
      target: { value, nextElementSibling },
    } = e;

    if (value.match(inputProps.pattern)) {
      if (nextElementSibling !== null) {
        (nextElementSibling as HTMLInputElement).focus();
      }
    } else {
      e.target.value = "";
    }

    sendResult();


  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    const target = e.target as HTMLInputElement;
    if (key === "Backspace") {
      if (target.value === "") {
        if (target.previousElementSibling !== null) {
          const previousElement =
            target.previousElementSibling as HTMLInputElement;
          previousElement.value = "";
          previousElement.focus();
        }
      } else {
        target.value = "";
      }
    }

    sendResult();
  };

  useEffect(() => {
    if (autoFocus) {
      inputsRef.current[0].focus;
    }
  }, [autoFocus]);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputsRef.current) {
        inputsRef.current[0].focus();
      }
    },
    clear: () => {
      if (inputsRef.current) {
        for (let i = 0; i < inputsRef.current.length; i++) {
          inputsRef.current[i].value = "";
        }

        inputsRef.current[0].focus();
      }

      sendResult();
    },
  }));

  const classes = classNames("textbox flex-1 w-1 text-center", {
    [`textbox-${variant}`]: variant,
  });

  const inputs = [];
  for (let i = 0; i < length; i++) {
    inputs.push(
      <input
        type="text"
        maxLength={1}
        className={classes}
        disabled={isDisabled}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onKeyDown={handleOnKeyDown}
        ref={(element: HTMLInputElement) => {
          inputsRef.current[i] = element;
        }}
      />
    );
  }

  return (
    <>
      <div className={`flex gap-4 flex-row-reverse`}>{inputs}</div>
    </>
  );
};

export default AuthCode;
