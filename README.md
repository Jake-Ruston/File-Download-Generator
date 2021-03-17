# File Download Generator

### Features

- Command to copy and paste onto the machine serving the file
- Command to copy and paste onto the machine downloading the file

### Adding Commands

If you would like add commands for either serving the file, or downloading the file, simply append your contribution to the following files:

- `src/inputs/Serve.js`
- `src/inputs/Download.js`

The following variables will be replaced with their corresponding values when rendered:

- `{ip}` - IP address of the listening machine
- `{port}` - Port of the listening machine
- `{source}` - Source file name
- `{destination}` - Destination file name

### Contributing

1. [Fork the repository](https://github.com/Jake-Ruston/File-Download-Generator/fork)
2. Clone your fork: `git clone https://github.com/your-username/File-Download-Generator`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Added this feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request ❤
