interface LogoTypeProps extends React.ComponentPropsWithoutRef<'svg'> {
  height?: number | string;
  width?: number | string;
}

export function LogoType({ width, height, style, ...others }: LogoTypeProps) {
  return (
    <svg
      viewBox="0 0 576 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width, height, ...style }}
      {...others}
    >
      <path
        d="M559.132 55.601c-2.453 0-4.639-.336-6.558-1.009-1.919-.692-3.571-1.533-4.956-2.522-1.385-.99-2.522-1.959-3.413-2.908-.89-.97-1.543-1.731-1.958-2.285l3.294-4.689a77.455 77.455 0 0 0 1.84 2.137c.771.87 1.721 1.74 2.848 2.611 1.128.87 2.444 1.603 3.947 2.196 1.504.594 3.205.89 5.104.89 1.801 0 3.433-.316 4.897-.95 1.464-.632 2.631-1.572 3.501-2.818.89-1.247 1.336-2.79 1.336-4.63 0-1.562-.317-2.888-.95-3.976-.633-1.108-1.513-2.057-2.641-2.849-1.128-.791-2.443-1.513-3.947-2.166a101.702 101.702 0 0 0-4.866-2.018 44.308 44.308 0 0 1-3.739-1.721 17.838 17.838 0 0 1-3.502-2.433 11.413 11.413 0 0 1-2.582-3.443c-.653-1.325-.979-2.888-.979-4.688 0-1.82.346-3.541 1.039-5.164a13.317 13.317 0 0 1 2.937-4.302c1.266-1.267 2.77-2.256 4.511-2.968 1.761-.732 3.709-1.098 5.846-1.098 1.899 0 3.689.297 5.371.89 1.701.594 3.215 1.355 4.54 2.285 1.326.91 2.384 1.87 3.175 2.879l-2.819 4.421c-.652-.85-1.483-1.652-2.492-2.403-1.009-.772-2.167-1.395-3.472-1.87-1.306-.475-2.711-.712-4.214-.712-1.84 0-3.403.386-4.689 1.157-1.266.752-2.235 1.731-2.908 2.938a7.808 7.808 0 0 0-1.009 3.858c0 1.226.247 2.265.742 3.116a7.105 7.105 0 0 0 2.048 2.166c.85.593 1.81 1.118 2.878 1.573 1.068.455 2.166.89 3.294 1.305a92.123 92.123 0 0 1 5.727 2.463c1.8.831 3.383 1.81 4.748 2.938a11.868 11.868 0 0 1 3.205 4.006c.791 1.563 1.187 3.452 1.187 5.668 0 2.987-.712 5.54-2.137 7.656-1.404 2.097-3.333 3.7-5.786 4.808-2.453 1.107-5.253 1.661-8.398 1.661ZM514.834 54.652V5.688h6.024v48.964h-6.024ZM460.481 54.652V5.688h13.888c3.244 0 6.054.564 8.428 1.692 2.374 1.128 4.203 2.75 5.489 4.867 1.306 2.097 1.959 4.619 1.959 7.567 0 2.572-.505 4.857-1.514 6.855a12.739 12.739 0 0 1-4.332 4.896c-1.86 1.266-4.085 2.097-6.677 2.493l16.203 20.594h-7.657L471.105 34.68h-4.6v19.97h-6.024Zm6.024-25.105h6.232c2.334 0 4.342-.386 6.024-1.157 1.681-.772 2.977-1.87 3.887-3.294.91-1.444 1.365-3.156 1.365-5.134 0-2.948-.999-5.252-2.997-6.914-1.978-1.662-4.738-2.493-8.279-2.493h-6.232v18.992ZM397.144 54.652V5.688h6.024V27.47h24.214V5.688h6.024v48.964h-6.024v-21.9h-24.214v21.9h-6.024ZM357.079 55.688c-4.014 0-7.758-.702-11.233-2.105-3.453-1.424-6.485-3.388-9.097-5.891a27.228 27.228 0 0 1-6.053-8.838c-1.446-3.367-2.169-6.993-2.169-10.877 0-3.885.723-7.51 2.169-10.877 1.467-3.367 3.496-6.302 6.086-8.806 2.59-2.525 5.611-4.489 9.064-5.892C349.299.978 353.033.266 357.047.266c3.323 0 6.453.485 9.388 1.457 2.957.95 5.536 2.255 7.737 3.917l-2.978 5.535c-1.77-1.424-3.842-2.514-6.216-3.27-2.374-.776-4.877-1.165-7.51-1.165-3.173 0-6.086.54-8.741 1.619-2.654 1.08-4.964 2.59-6.928 4.532-1.942 1.92-3.453 4.176-4.532 6.766-1.057 2.568-1.586 5.341-1.586 8.32 0 2.978.529 5.762 1.586 8.352a20.95 20.95 0 0 0 4.532 6.766c1.964 1.92 4.274 3.42 6.928 4.5 2.655 1.079 5.568 1.618 8.741 1.618 2.633 0 5.136-.378 7.51-1.133 2.374-.777 4.446-1.878 6.216-3.302l2.978 5.536c-2.158 1.618-4.705 2.924-7.64 3.917-2.935.971-6.086 1.457-9.453 1.457ZM290.483 54.652V11.089h-14.185v-5.4h34.423v5.4h-14.214v43.563h-6.024ZM231.16 54.652V5.688h25.431V11h-19.407v16.47h18.695v5.282h-18.695V49.34h19.407v5.312H231.16ZM167.301 54.652V5.688h6.024l24.749 38.785V5.688h6.024v48.964h-6.024l-24.749-38.755v38.755h-6.024ZM101.061 54.652l19.378-48.964h5.608l19.378 48.964h-6.499l-5.431-14.274H112.99l-5.46 14.274h-6.469Zm13.977-19.586h16.41l-8.22-21.336-8.19 21.336ZM57.55 54.652V5.688h6.025V49.34h19.674v5.312H57.55ZM.527 54.652V1.237h15.15c3.497 0 6.54.605 9.13 1.813 2.59 1.209 4.597 2.957 6.02 5.245 1.447 2.287 2.17 5.071 2.17 8.352 0 3.237-.723 6.064-2.17 8.481-1.424 2.396-3.43 4.252-6.02 5.568-2.59 1.317-5.633 1.975-9.13 1.975H7.1v21.98H.527ZM7.1 27.265h6.798c2.417 0 4.543-.41 6.377-1.23 1.857-.82 3.302-2.008 4.338-3.561C25.67 20.92 26.2 19.03 26.2 16.808c0-2.244-.53-4.122-1.587-5.632-1.036-1.533-2.481-2.687-4.338-3.464-1.834-.777-3.96-1.166-6.377-1.166H7.1v20.719ZM491.411 125.569c-2.784 0-5.374-.534-7.769-1.602a19.594 19.594 0 0 1-6.289-4.443c-1.796-1.91-3.196-4.12-4.2-6.629-1.003-2.508-1.505-5.203-1.505-8.085 0-2.654.437-5.22 1.311-7.696a20.713 20.713 0 0 1 3.885-6.677c1.715-1.975 3.811-3.537 6.288-4.686 2.476-1.165 5.301-1.748 8.474-1.748 2.152 0 4.159.275 6.021.825 1.861.55 3.553 1.311 5.074 2.283 1.538.97 2.865 2.096 3.982 3.374l-1.481 1.991c-1.554-1.829-3.521-3.302-5.9-4.418-2.363-1.134-4.953-1.7-7.769-1.7-2.687 0-5.083.502-7.187 1.505-2.104 1.004-3.893 2.372-5.366 4.104a18.226 18.226 0 0 0-3.35 5.875 20.74 20.74 0 0 0-1.141 6.871c0 2.574.428 4.986 1.286 7.235.858 2.234 2.056 4.193 3.594 5.876a17.008 17.008 0 0 0 5.39 3.933c2.055.939 4.265 1.409 6.628 1.409 1.942 0 3.836-.324 5.681-.972a16.407 16.407 0 0 0 5.026-2.792 13.397 13.397 0 0 0 3.569-4.394c.891-1.716 1.336-3.642 1.336-5.779v-1.602h-15.831v-2.234h18.55v2.962c0 2.946-.542 5.495-1.627 7.648-1.068 2.153-2.501 3.942-4.297 5.366a18.674 18.674 0 0 1-5.924 3.156c-2.153.696-4.306 1.044-6.459 1.044ZM422.797 124.793V84.732h2.647l22.58 35.472V84.732h2.646v40.061h-2.646l-22.58-35.424v35.424h-2.647ZM396.867 124.793V84.732h2.647v40.061h-2.647ZM361.785 124.793V87.208h-12.746v-2.476h28.164v2.476h-12.771v37.585h-2.647ZM315.56 124.793V84.732h2.646v37.705h17.36v2.356H315.56ZM279.289 125.569c-4.516 0-7.907-1.262-10.173-3.787-2.25-2.541-3.375-6.329-3.375-11.363V84.732h2.647v25.226c0 4.305.914 7.551 2.743 9.736 1.829 2.169 4.548 3.253 8.158 3.253 3.593 0 6.305-1.084 8.134-3.253 1.829-2.185 2.743-5.431 2.743-9.736V84.732h2.647v25.687c0 5.034-1.125 8.822-3.375 11.363-2.25 2.525-5.633 3.787-10.149 3.787ZM233.275 125.569c-2.121 0-3.966-.332-5.536-.995-1.554-.68-2.865-1.489-3.933-2.428-1.052-.955-1.878-1.87-2.477-2.744-.599-.89-1.003-1.546-1.214-1.966l1.676-1.748c.226.437.615 1.06 1.165 1.869.55.809 1.287 1.643 2.209 2.501.923.841 2.056 1.562 3.399 2.161 1.344.599 2.93.898 4.759.898 1.732 0 3.326-.316 4.783-.947 1.457-.647 2.631-1.602 3.521-2.865.89-1.262 1.335-2.824 1.335-4.686 0-1.554-.307-2.865-.922-3.933a8.122 8.122 0 0 0-2.453-2.695 17.17 17.17 0 0 0-3.496-1.918 77.091 77.091 0 0 0-4.03-1.578 44.504 44.504 0 0 1-3.035-1.239 15.617 15.617 0 0 1-3.059-1.845 9.292 9.292 0 0 1-2.356-2.816c-.615-1.117-.922-2.477-.922-4.08 0-1.44.267-2.791.801-4.054a10.3 10.3 0 0 1 2.234-3.35c.955-.972 2.096-1.732 3.423-2.283 1.327-.55 2.784-.825 4.37-.825 1.651 0 3.132.283 4.444.85 1.327.55 2.46 1.254 3.399 2.112.938.842 1.651 1.7 2.136 2.574l-1.554 1.65c-.404-.776-1.003-1.529-1.796-2.257-.777-.729-1.732-1.328-2.865-1.797-1.117-.47-2.372-.704-3.764-.704-1.78 0-3.293.396-4.54 1.19-1.23.793-2.169 1.812-2.816 3.059a8.173 8.173 0 0 0-.971 3.86c0 1.263.259 2.331.777 3.205a7.402 7.402 0 0 0 2.015 2.185 14.329 14.329 0 0 0 2.743 1.481c.988.405 1.959.769 2.914 1.093a64.679 64.679 0 0 1 4.37 1.748 18.539 18.539 0 0 1 3.861 2.282 9.58 9.58 0 0 1 2.767 3.254c.68 1.295 1.02 2.873 1.02 4.734 0 2.347-.558 4.346-1.675 5.997-1.101 1.651-2.59 2.906-4.468 3.763-1.861.858-3.941 1.287-6.239 1.287ZM173.184 124.793V84.732h2.647l22.579 35.472V84.732h2.647v40.061h-2.647l-22.579-35.424v35.424h-2.647ZM132 125.569c-2.8 0-5.422-.534-7.866-1.602a20.201 20.201 0 0 1-6.434-4.443 21.289 21.289 0 0 1-4.346-6.629c-1.036-2.525-1.554-5.228-1.554-8.109 0-2.897.518-5.6 1.554-8.11 1.052-2.508 2.5-4.71 4.346-6.603 1.845-1.91 3.99-3.4 6.434-4.468s5.066-1.602 7.866-1.602 5.423.534 7.867 1.602a19.991 19.991 0 0 1 6.434 4.468c1.845 1.894 3.286 4.095 4.322 6.604 1.052 2.509 1.578 5.212 1.578 8.109 0 2.881-.526 5.584-1.578 8.109a20.962 20.962 0 0 1-4.322 6.629 20.201 20.201 0 0 1-6.434 4.443c-2.444 1.068-5.067 1.602-7.867 1.602Zm0-2.549c2.428 0 4.694-.47 6.798-1.408a17.02 17.02 0 0 0 5.512-3.909c1.586-1.667 2.824-3.602 3.715-5.803.89-2.201 1.335-4.573 1.335-7.114 0-2.541-.445-4.912-1.335-7.114-.891-2.201-2.129-4.135-3.715-5.803a17.014 17.014 0 0 0-5.512-3.909c-2.104-.938-4.37-1.408-6.798-1.408-2.411 0-4.669.47-6.774 1.408a17.293 17.293 0 0 0-5.535 3.91c-1.57 1.667-2.801 3.6-3.691 5.802-.89 2.202-1.335 4.573-1.335 7.114 0 2.541.445 4.913 1.335 7.114.89 2.201 2.121 4.136 3.691 5.803a17.298 17.298 0 0 0 5.535 3.909c2.105.938 4.363 1.408 6.774 1.408ZM82.23 125.569c-2.995 0-5.77-.526-8.328-1.578-2.541-1.052-4.759-2.517-6.653-4.395a20.397 20.397 0 0 1-4.418-6.603c-1.036-2.526-1.554-5.261-1.554-8.207 0-2.946.518-5.673 1.553-8.182 1.053-2.525 2.526-4.727 4.42-6.604 1.893-1.894 4.11-3.367 6.652-4.419 2.557-1.052 5.333-1.578 8.328-1.578 2.525 0 4.88.372 7.065 1.117 2.201.744 4.16 1.78 5.876 3.108l-1.336 2.185c-1.505-1.23-3.237-2.17-5.195-2.817-1.96-.647-4.039-.97-6.24-.97-2.671 0-5.123.468-7.357 1.407-2.218.923-4.144 2.21-5.779 3.86a17.577 17.577 0 0 0-3.763 5.78c-.874 2.2-1.31 4.572-1.31 7.113 0 2.541.436 4.913 1.31 7.114a17.578 17.578 0 0 0 3.763 5.778c1.635 1.651 3.562 2.946 5.779 3.885 2.234.923 4.686 1.384 7.357 1.384 2.201 0 4.28-.324 6.24-.971 1.958-.648 3.69-1.586 5.195-2.817l1.336 2.186c-1.7 1.311-3.65 2.347-5.852 3.107-2.185.745-4.548 1.117-7.09 1.117Z"
        fill="currentcolor"
      />
    </svg>
  );
}
