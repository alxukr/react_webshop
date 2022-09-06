function Footer() {
    return (
        <footer className='page-footer purple darken-4'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <b className='grey-text text-lighten-4 right' >
                        Repo
                    </b>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
