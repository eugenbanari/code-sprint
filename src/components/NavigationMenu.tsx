import NavLink from './NavLink';

const MENU_ITEMS = {
    APPS: { to: '/apps', label: 'Apps' },
    DATA: { to: '/data', label: 'Data' },
    IDENTITIES: { to: '/identities', label: 'Identities' },
    ALERTS: { to: '/alerts', label: 'Alerts' },
    INVESTIGATION_CENTER: { to: '/investigations', label: 'Investigation Center' },
    CONFIGURATIONS: { to: '/configurations', label: 'Configurations' },
};

const NavigationMenu: React.FC = () => {
    return (
        <div className="flex items-center gap-x-8">
            {Object.values(MENU_ITEMS).map((props) => (
                <NavLink {...props} />
            ))}
        </div>
    );
};

export default NavigationMenu;
