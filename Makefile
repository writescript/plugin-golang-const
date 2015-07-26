.PHONY: test

test:
	@writescript --version
	@bats test/test
