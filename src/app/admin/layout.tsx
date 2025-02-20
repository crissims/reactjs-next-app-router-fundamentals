export default function AdminLayout ({children}: {children: React.ReactNode}) {
    return (
        <div>
            <div>{children}</div>
            <p>Painel de Administração</p>
        </div>
    )
}