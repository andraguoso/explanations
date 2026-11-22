export default function NavBar() {
    return (
        <section className="flex flex-col justify-center items-center gap-2">
            <span>
                developed by <a
                    className="text-blue-700"
                    href="https://github.com/andraguoso">
                    @andraguoso
                </a> for snowglobe hack club 2026
            </span>
            <span className="flex flex-row gap-4">
                <a
                    className="p-3 rounded-full bg-rose text-cielo font-bold"
                    href="https://vjudge.net/user/andraguoso"
                    target="_blank"
                >vjudge</a>
                <a
                    className="p-3 rounded-full bg-rose text-cielo font-bold"
                    href="https://codeforces.com/profile/andraguoso"
                    target="_blank"
                >codeforces</a>
                <a
                    className="p-3 rounded-full bg-rose text-cielo font-bold"
                    href="https://atcoder.jp/users/andraguoso"
                    target="_blank"
                >atcoder</a>
            </span>
        </section>
    );
}