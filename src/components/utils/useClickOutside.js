export function useClickOutside(targetRef, action, additionalListeners = []) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (targetRef.current && !targetRef.current.contains(event.target)) {
                action();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        additionalListeners.forEach((listener) => {
            const { element, eventType, listenerFn } = listener;
            element.addEventListener(eventType, listenerFn);
        });

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);

            additionalListeners.forEach((listener) => {
                const { element, eventType, listenerFn } = listener;
                element.removeEventListener(eventType, listenerFn)
            });
        };
    }, [targetRef, action, additionalListeners])
}




function useClickOutside(targetRef, action, additionalListeners = []) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (targetRef.current && !targetRef.current.contains(event.target)) {
          action();
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
  
      additionalListeners.forEach((listener) => {
        const { element, eventType, listenerFn } = listener;
        element.addEventListener(eventType, listenerFn);
      });
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
  
        additionalListeners.forEach((listener) => {
          const { element, eventType, listenerFn } = listener;
          element.removeEventListener(eventType, listenerFn);
        });
      };
    }, [targetRef, action, additionalListeners]);
  }


  First scenario:


const modalRef = useRef(null);
const setShowContact = useCallback(() => { !showContact }, []);

useClickOutside(modalRef, setShowContact, [
  {
    element: window,
    eventType: "resize",
    listenerFn: () => {
      // Action to perform on window resize
      // closeMenu();
      // setFlipped(!isFlipped);
    },
  },
]);

Second scenario:

const menuRef = useRef(null);
const [isFlipped, setFlipped] = useState(false);

function closeMenu() {
  // Implementation to close the menu
}

useClickOutside(menuRef, () => {
  closeMenu();
  setFlipped(!isFlipped);
});



Original:

useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click target contains the icon element
      const iconEl = document.querySelector(".navbar__container__menu__icon");
      if (iconEl && iconEl.contains(event.target)) {
        return;
      }

      // Make the menu disappear if you click outside of it
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
        setFlipped(!isFlipped);
      }
    }

    // Make the menu disappear if you resize the screen
    function handleWindowResize() {
      closeMenu();
      setFlipped(!isFlipped);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isFlipped]);