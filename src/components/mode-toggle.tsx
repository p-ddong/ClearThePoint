import { useTheme , type Theme} from "@/Theme/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const themeOptions: { value: Theme; label: string }[] = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
  ];

  return (
    <div className="fixed left-[-60px] bottom-[100px] rotate-270 ">
      <div className="flex items-center">
        {themeOptions.map((option) => {
          const isSelected = theme === option.value;
          return (
            <label
              key={option.value}
              className="cursor-none cursor-target flex items-center space-x-2 rounded-md p-2 transition-colors"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => setTheme(option.value)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-primary border-primary text-foreground"
                      : "border-[1px]"
                  }`}
                ></div>
              </div>
              <span className="text-sm font-medium">{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
